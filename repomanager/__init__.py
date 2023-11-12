import os
from dotenv import load_dotenv
from flask import Flask
import logging

# load environment variables
load_dotenv()


# Flask app
app = Flask(__name__)
app.secret_key = os.environ["SECRET_KEY"]

# logging
logging.basicConfig(level=logging.DEBUG)