"""repomanager app"""
# Entry point for the application.
from . import create_app

if __name__ == "__main__":
    app = create_app()
    app.run()