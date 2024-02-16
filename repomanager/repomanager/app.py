"""repomanager app"""

import os
from flask import Flask


# Entry point for the application.


# For import side-effects of setting up routes.
from .views import (
    auth_blueprint,
    public_blueprint,
    user_blueprint,
)


# Flask app
def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # configure the app
    app.config.from_mapping(
        SECRET_KEY=os.environ["SECRET_KEY"],
    )

    # Register the blueprints
    app.register_blueprint(public_blueprint)
    # app.register_blueprint(auth_blueprint)
    # app.register_blueprint(user_blueprint)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
