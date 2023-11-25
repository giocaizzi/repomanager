"""repomanager app"""
# Entry point for the application.
from . import app

# For import side-effects of setting up routes.
from .views import views_blueprint

# filters
from .filters import is_none_filter, is_different_filter, icon_filter

# Register the blueprints
app.register_blueprint(views_blueprint)

app.jinja_env.filters["icon"] = icon_filter
app.jinja_env.filters["is_none"] = is_none_filter
app.jinja_env.filters["is_different"] = is_different_filter

if __name__ == "__main__":
    app.run()
