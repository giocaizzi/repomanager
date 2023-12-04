from flask import (
    render_template,
)
import traceback
import sys


def handle_exception(e):
    # Get information about the exception
    exc_type, exc_value, exc_traceback = sys.exc_info()
    # Format the traceback
    traceback_details = traceback.format_exception(
        exc_type, exc_value, exc_traceback
    )
    return (
        render_template(
            "error.html", error=e, traceback_details="".join(traceback_details)
        ),
        500,
    )
