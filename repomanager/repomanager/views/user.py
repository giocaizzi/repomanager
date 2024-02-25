from flask import (
    render_template,
    session,
    Blueprint,
    jsonify,
)

from ..models.github.user import _login
from ..middleware import token_required


user_blueprint = Blueprint("user", __name__)


@token_required
@user_blueprint.route("/<username>/")
def user(username):
    # user page
    # user = _login(session["login_type"], session["login_input"])
    # return jsonify(user)
    return jsonify({"message": "User page"})


# @user_blueprint.route("/<username>/repos/")
# def repos(username):
#     # table of repos overview
#     user = _login(session["login_type"], session["login_input"])
#     repos = user.repos
#     return render_template(
#         "repos.html",
#         user=user,
#         repos=repos,
#     )


# @user_blueprint.route("/<username>/repos/<repo_name>/")
# def repo(username, repo_name):
#     # Repository page
#     repo = _login(
#         session["login_type"], session["login_input"]
#     ).get_respository(repo_name)
#     return render_template("repo.html", repo=repo)
