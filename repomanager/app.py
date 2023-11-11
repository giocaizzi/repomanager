from flask import Flask, render_template, session, request, redirect, url_for
from decouple import config
import logging
from functools import wraps


from .github import User, _login


logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")

@app.template_filter('is_none')
def is_none_filter(value):
    return value is None


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


@app.route("/login/")
def login():
    return render_template("login.html")


@app.route("/about/")
def about():
    return render_template("about.html")


@app.route("/auth/", methods=["POST"])
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


@app.route("/logout/")
def logout():
    # Remove the keys from the session
    session.pop("login_type", None)
    session.pop("login_input", None)
    app.logger.info("Logged out")
    return redirect(url_for("home"))


@app.route("/<username>/")
@redirect_to_home_missing_auth
def user(username):
    return render_template(
        "user.html",
        user=_login(session["login_type"], session["login_input"]),
    )


@app.route("/<username>/repos/")
@redirect_to_home_missing_auth
def repos(username):
    return render_template(
        "repos.html",
        repos=_login(session["login_type"], session["login_input"]).repos,
    )


@app.route("/<username>/repos/<repo_name>/")
@redirect_to_home_missing_auth
def repo(username, repo_name):
    repository = _login(
        session["login_type"], session["login_input"]
    ).get_respository(repo_name)
    return render_template("repo.html", repo=repository)


@app.errorhandler(Exception)
def handle_exception(e):
    return render_template("error.html", error=e), 500


if __name__ == "__main__":
    app.run()
