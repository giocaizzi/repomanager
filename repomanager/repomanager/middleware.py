from functools import wraps
import jwt
from flask import request, current_app, jsonify


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # jwt is passed in the request header
        if "x-access-token" in request.headers:
            token = request.headers["x-access-token"]
        # return 401 if token is not passed
        if not token:
            return jsonify({"message": "Token is missing !!"}), 401

        try:
            # decoding the payload to fetch the stored details
            data = jwt.decode(token, current_app.config["SECRET_KEY"])
            # setting the current user context
            current_user = data
        except Exception:
            return jsonify({"message": "Invalid token!"}), 401
        # returns the current logged in users context to the routes
        return f(current_user, *args, **kwargs)

    return decorated


def require_json_content_type(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        content_type = request.headers.get("Content-Type")
        if content_type != "application/json":
            return jsonify({"message": "Content-Type not supported!"}), 415
        return f(*args, **kwargs)

    return decorated_function
