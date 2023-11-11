from flask import Flask, render_template, session, request, redirect, url_for
from decouple import config
import logging
from functools import wraps


from .github import User


logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")


def redirect_to_home_missing_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "login_type" not in session or "login_input" not in session:
            return redirect(url_for("home"))
        return f(*args, **kwargs)

    return decorated_function


@app.route("/")
def home():
    if "login_type" in session and "login_input" in session:
        return render_template(
            "user.html",
            user=_login(session["login_type"], session["login_input"]),
        )
    else:
        return render_template("home.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/auth", methods=["POST"])
def auth():
    app.logger.info("Login requested")
    # checking if login, otherwise raise error
    user = _login(
        login_type=request.form.get("login_type"),
        login_input=request.form.get("login_input"),
    )
    # storing correct login info in session
    session["login_type"] = request.form.get("login_type")
    session["login_input"] = request.form.get("login_input")
    return redirect(url_for("user", username=user.login))


@app.route("/logout")
def logout():
    # Remove the keys from the session
    session.pop("login_type", None)
    session.pop("login_input", None)
    app.logger.info("Logged out")
    return redirect(url_for("home"))


@app.route("/<username>")
@redirect_to_home_missing_auth
def user(username):
    app.logger.info("User page requested with login")
    return render_template(
        "user.html",
        user=_login(session["login_type"], session["login_input"]),
    )


@app.route("/<username>/repos")
@redirect_to_home_missing_auth
def repos(username):
    app.logger.info("User repos page requested with login")
    return render_template(
        "repos.html",
        repos=_login(session["login_type"], session["login_input"]).repos,
    )


def _login(login_type=None, login_input=None):
    """Returns a GithubClient object based on the login type and input.

    Raises:
        LoginError: If the login fails.
        ValueError: If the login type is not recognized.
        NotImplementedError: If the login type is not implemented.
    """
    if login_type == "token":
        app.logger.info("Logging in with token")
        try:
            return User(token=login_input)
        except Exception as e:
            raise LoginError("Login with token failed.", e)
    elif login_type == "username":
        app.logger.info("Logging in with username")
        raise LoginError("Only token login is currently supported.")
    else:
        app.logger.info(f"{login_type} is not a valid login type.")
        raise LoginError(f"Unknown login type : {login_type}")


@app.errorhandler(Exception)
def handle_exception(e):
    return render_template("error.html", error=e), 500


class BaseError(Exception):
    known_exception = True

    def __init__(self, message, original_exception=None):
        super().__init__(message, original_exception)
        self.message = message
        self.original_exception = original_exception


class LoginError(BaseError):
    pass


if __name__ == "__main__":
    app.run()
