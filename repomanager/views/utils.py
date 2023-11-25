from flask import (
    redirect,
    url_for,
    session,
)
from functools import wraps


def redirect_to_home_missing_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "login_type" not in session or "login_input" not in session:
            return redirect(url_for("public.home"))
        return f(*args, **kwargs)

    return decorated_function
