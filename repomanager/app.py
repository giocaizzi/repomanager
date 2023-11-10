from flask import Flask, render_template
from decouple import config

from .github import GithubClient

app = Flask(__name__)


@app.route("/")
def home():
    user = GithubClient(config("GITHUB_TOKEN"))
    return render_template("home.html", user=user)


@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":    
    app.run(debug=True)
