from flask import (
    jsonify,
    request,
    Blueprint,
    # current_app is a proxy to the app for logging
    current_app as app,
)
import jwt
from datetime import datetime, timedelta
from ..middleware import require_json_content_type
from ..models.github.user import _login
from ..models.github.exceptions import (
    LoginError,
    UnsupportedLoginType,
    UnknownLoginType,
)


auth_blueprint = Blueprint("auth", __name__)


# authentication
@auth_blueprint.route("/auth/", methods=["POST"])
@require_json_content_type
def auth():
    data = request.json
    login_type = data["login_type"]
    login_input = data["login_input"]
    app.logger.info("Login requested: {} {}".format(login_type, login_input))
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
        return jsonify({"token": token, "username": user.login}), 200
    except LoginError as e:
        return jsonify({"error": str(e)}), 400
    except UnsupportedLoginType as e:
        return jsonify({"error": str(e)}), 400
    except UnknownLoginType as e:
        return jsonify({"error": str(e)}), 400
