from flask import (
    render_template,
    session,
    request,
    redirect,
    url_for,
    Blueprint,
    # current_app is a proxy to the app for logging
    current_app as app,
)

from ..models.github.user import _login


auth_blueprint = Blueprint("auth", __name__)


@auth_blueprint.route("/login/")
def login():
    return render_template("login.html")


@auth_blueprint.route("/logout/")
def logout():
    # Remove the keys from the session
    session.pop("login_type", None)
    session.pop("login_input", None)
    app.logger.info("Logged out")
    return redirect(url_for("public.home"))


# authentication


@auth_blueprint.route("/auth/", methods=["POST"])
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
    return redirect(url_for("user.user", username=user.login))
