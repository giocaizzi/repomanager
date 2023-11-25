from flask import (
    render_template,
    Blueprint,
    redirect,
    url_for,
)

from ..models.github.user import _login
from .utils import redirect_to_home_missing_auth


public_blueprint = Blueprint("public", __name__)


# public pages


@public_blueprint.route("/")
@redirect_to_home_missing_auth
def home():
    redirect(url_for("user"))


@public_blueprint.route("/about/")
def about():
    return render_template("about.html")
