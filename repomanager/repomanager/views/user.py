from flask import (
    Blueprint,
    jsonify,
)

from ..models.github.user import _login
from ..middleware import token_required


user_blueprint = Blueprint("user", __name__)


@user_blueprint.route("/<username>/")
@token_required
def user(current_user, username):
    # user page
    user = _login(current_user["login_type"], current_user["login_input"])
    return jsonify(user.to_json())


@user_blueprint.route("/<username>/repositories/")
@token_required
def repos(current_user, username):
    # table of repos overview
    user = _login(current_user["login_type"], current_user["login_input"])
    return jsonify([repo.to_json() for repo in user.repos])


# @user_blueprint.route("/<username>/repos/<repo_name>/")
# def repo(username, repo_name):
#     # Repository page
#     repo = _login(
#         session["login_type"], session["login_input"]
#     ).get_respository(repo_name)
#     return render_template("repo.html", repo=repo)
