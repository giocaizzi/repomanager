from flask import (
    render_template,
    session,
    request,
    redirect,
    url_for,
)
from functools import wraps
import traceback
import sys

from . import app
from .github.user import _login


# redirect


def redirect_to_home_missing_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "login_type" not in session or "login_input" not in session:
            return redirect(url_for("home"))
        return f(*args, **kwargs)

    return decorated_function


# public pages


@app.route("/")
def home():
    if "login_type" in session and "login_input" in session:
        user = _login(session["login_type"], session["login_input"])
        return render_template(
            "user.html",
            user=user,
        )
    else:
        return render_template("home.html")


@app.route("/about/")
def about():
    return render_template("about.html")


@app.route("/login/")
def login():
    return render_template("login.html")


@app.route("/logout/")
def logout():
    # Remove the keys from the session
    session.pop("login_type", None)
    session.pop("login_input", None)
    app.logger.info("Logged out")
    return redirect(url_for("home"))


# authentication


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


# personal pages


@app.route("/<username>/")
@redirect_to_home_missing_auth
def user(username):
    # user page
    user = _login(session["login_type"], session["login_input"])
    return render_template(
        "user.html",
        user=user,
    )


@app.route("/<username>/repos/")
@redirect_to_home_missing_auth
def repos(username):
    # table of repos overview
    user = _login(session["login_type"], session["login_input"])
    repos = user.repos
    return render_template(
        "repos.html",
        user=user,
        repos=repos,
    )


@app.route("/<username>/repos/<repo_name>/")
@redirect_to_home_missing_auth
def repo(username, repo_name):
    # Repository page
    repo = _login(
        session["login_type"], session["login_input"]
    ).get_respository(repo_name)
    return render_template("repo.html", repo=repo)


@app.errorhandler(Exception)
def handle_exception(e):
    # Get information about the exception
    exc_type, exc_value, exc_traceback = sys.exc_info()
    # Format the traceback
    traceback_details = traceback.format_exception(
        exc_type, exc_value, exc_traceback
    )
    return (
        render_template(
            "error.html", error=e, traceback_details="".join(traceback_details)
        ),
        500,
    )