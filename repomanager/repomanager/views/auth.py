from flask import (
    jsonify,
    session,
    request,
    redirect,
    url_for,
    Blueprint,
    # current_app is a proxy to the app for logging
    current_app as app,
)
import jwt
from datetime import datetime, timedelta

from ..models.github.user import _login
from ..models.github.exceptions import (
    LoginError,
    UnsupportedLoginType,
    UnknownLoginType,
)


auth_blueprint = Blueprint("auth", __name__)


# authentication
@auth_blueprint.route("/auth/", methods=["POST"])
def auth():
    login_type = request.form.get("login_type")
    login_input = request.form.get("login_input")
    app.logger.info("Login requested")
    try:
        # checking if login, otherwise raise error
        user = _login(
            login_type=login_type,
            login_input=login_input,
        )
        token = jwt.encode(
            {
                "token": login_input,
                "exp": datetime.utcnow() + timedelta(minutes=30),
            },
            app.config["SECRET_KEY"],
        )
        return jsonify({"token": token.decode("UTF-8"), "username": user.login}, 200)
    except LoginError as e:
        return jsonify({"error": str(e)}), 400
    except UnsupportedLoginType as e:
        return jsonify({"error": str(e)}), 400
    except UnknownLoginType as e:
        return jsonify({"error": str(e)}), 400
