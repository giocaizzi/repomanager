from flask import Flask, render_template, session, request, redirect, url_for
from decouple import config
import logging

from .github import GithubClient


logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")


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
    _login(
        login_type=request.form.get("login_type"),
        login_input=request.form.get("login_input"),
    )
    # storing correct login info in session
    session["login_type"] = request.form.get("login_type")
    session["login_input"] = request.form.get("login_input")
    return redirect(url_for("user"))


@app.route("/logout")
def logout():
    # Remove the keys from the session
    session.pop("login_type", None)
    session.pop("login_input", None)
    app.logger.info("Logged out")
    return redirect(url_for("home"))


@app.route("/user")
def user():
    if "login_type" in session and "login_input" in session:
        app.logger.info("User page requested with login")
        return render_template(
            "user.html",
            user=_login(session["login_type"], session["login_input"]),
        )
    else:
        app.logger.info("User page requested without login")
        return redirect(url_for("home"))


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
            return GithubClient(token=login_input)
        except Exception as e:
            raise LoginError(f"Login with token failed. {e}")

    elif login_type == "username":
        app.logger.info("Logging in with username")
        raise NotImplementedError("Only token login is currently supported.")
    else:
        app.logger.info(f"{login_type} is not a valid login type.")
        raise ValueError("Unknown login type.")


@app.errorhandler(Exception)
def handle_exception(e):
    # pass the error to the template
    # returns the template with a 500 error
    return render_template("error.html", error=e), 500


class LoginError(Exception):
    pass


if __name__ == "__main__":
    app.run()
