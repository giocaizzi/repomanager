from flask import (
    render_template,
    Blueprint,
    session,
    redirect,
    url_for,
)

public_blueprint = Blueprint("public", __name__)


# public pages


@public_blueprint.route("/")
def home():
    # if logged in, redirect to user page
    if "login" in session:
        return redirect(url_for("user.user", username=session["login"]))
    else:
        return render_template("home.html")


@public_blueprint.route("/about/")
def about():
    return render_template("about.html")
