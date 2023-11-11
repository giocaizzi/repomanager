from flask import (
    Flask,
    render_template,
    session,
    request,
    redirect,
    url_for,
    Markup,
)
from decouple import config
import logging
from functools import wraps
import traceback
import sys


from .github import User, _login


logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")


@app.template_filter("is_none")
def is_none_filter(value):
    return value is None


@app.template_filter("is_different")
def is_different_filter(value1, value2):
    return value1 != value2


class Icon:
    _unicode = False
    _str = None

    def __init__(self, str, unicode: bool = False):
        self._str = str
        self._unicode = unicode

    @property
    def unicode(self):
        return self._unicode

    @property
    def div(self):
        if self.unicode:
            return Markup("<div class='unicode'>&#" + self._str + ";</div>")
        else:
            return Markup(
                '<img class="icon" src="' + self._str + '" alt="">'
            )


ICONS = {
    "defaults": {
        True: Icon("9989", True),  # unicode checkmark
        False: Icon("10060", True),  # unicode cross
    },
    "language": {
        "Python": Icon("/static/img/python.png"),
        "JavaScript": Icon("/static/img/javascript.png"),
        "Jupyter Notebook": Icon("/static/img/jupyter_notebook.png"),
    },
    "private": {
        True: Icon("/static/img/private.png"),
        False: Icon("/static/img/public.png"),
    },
}


@app.template_filter("icon")
def icon_filter(value, collection=None):
    # if group is not passed
    if collection is None:
        # check defaults in
        if value in ICONS["defaults"]:
            return ICONS["defaults"][value].div
        else:
            return value
    else:
        if collection in ICONS:
            if value in ICONS[collection]:
                return ICONS[collection][value].div
            else:
                return value
        else:
            #check if there is an icon in defaults
            if value in ICONS["defaults"]:
                return ICONS["defaults"][value].div
            else:
                return value


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


if __name__ == "__main__":
    app.run()
