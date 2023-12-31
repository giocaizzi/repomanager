from flask import (
    render_template,
    session,
    Blueprint,
)

from ..models.github.user import _login
from .utils import redirect_to_home_missing_auth


user_blueprint = Blueprint("user", __name__)


@user_blueprint.route("/<username>/")
@redirect_to_home_missing_auth
def user(username):
    # user page
    user = _login(session["login_type"], session["login_input"])
    return render_template(
        "user.html",
        user=user,
    )


@user_blueprint.route("/<username>/repos/")
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


@user_blueprint.route("/<username>/repos/<repo_name>/")
@redirect_to_home_missing_auth
def repo(username, repo_name):
    # Repository page
    repo = _login(
        session["login_type"], session["login_input"]
    ).get_respository(repo_name)
    return render_template("repo.html", repo=repo)
