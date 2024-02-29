from flask import (
    Blueprint,
    jsonify,
)

from importlib import metadata

public_blueprint = Blueprint("public", __name__)


@public_blueprint.route("/")
def home():
    return jsonify(
        {
            "message": "Welcome to the Repomanager API",
            "version": metadata.metadata("repomanager")["version"],
        }
    )
