import os
from dotenv import load_dotenv
from flask import Flask
import logging

# For import side-effects of setting up routes.
from .views import views

# filters
from .filters import is_none_filter, is_different_filter, icon_filter

# load environment variables
load_dotenv()


# logging
logging.basicConfig(level=logging.DEBUG)


# Flask app
def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY=os.environ["SECRET_KEY"],
    )

    # Register the blueprints
    app.register_blueprint(views)

    # jinja filters
    app.jinja_env.filters["icon"] = icon_filter
    app.jinja_env.filters["is_none"] = is_none_filter
    app.jinja_env.filters["is_different"] = is_different_filter

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    return app
