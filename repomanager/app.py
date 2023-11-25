"""repomanager app"""
# Entry point for the application.
from . import app  # For application discovery by the 'flask' command.
from . import views  # For import side-effects of setting up routes.

from .filters import is_none_filter, is_different_filter, icon_filter

app.jinja_env.filters["icon"] = icon_filter
app.jinja_env.filters["is_none"] = is_none_filter
app.jinja_env.filters["is_different"] = is_different_filter

if __name__ == "__main__":
    app.run()
