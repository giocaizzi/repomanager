import pytest
import os
import json
import jwt
import datetime as dt

from repomanager.app import create_app


@pytest.fixture()
def test_app():
    """fixture to create a test app"""
    app = create_app()
    # set up app for testing
    app.config.update(
        {
            "TESTING": True,
            "SECRET_KEY": "pytest",
        }
    )
    # other setup can go here
    # ....
    yield app
    # clean up / reset resources here
    # ...


@pytest.fixture()
def client(test_app: pytest.fixture):
    """fixture to create a test client"""
    return test_app.test_client()


@pytest.fixture
def logged_in_client(test_app: pytest.fixture):
    """fixture to create a logged in test client"""
    c = test_app.test_client()
    c.environ_base["Authorization"] = "Bearer " + jwt.encode(
        {
            "login_input": "test_login_input",
            "login_type": "test_login_type",
            "exp": dt.datetime.utcnow() + dt.timedelta(minutes=30),
        },
        "pytest",
    )
    return c


@pytest.fixture
def test_request(client: pytest.fixture):
    """fixture to test requests to the API

    Args:
        client (pytest.fixture): fixture to create a test client
    """

    def _test_request(
        endpoint: str, json_data: dict = None, method: str = "get", headers: dict = None
    ):
        """test requests to the API

        Args:
            endpoint (string): _description_
            json_data (dict, optional): _description_. Defaults to None.
            method (str, optional): _description_. Defaults to "get".
            headers (dict, optional): _description_. Defaults to None.

        Returns:
            tuple: responde and json-parsed data
        """

        if method.lower() == "get":
            response = client.get(endpoint, headers=headers)
        elif method.lower() == "post":
            response = client.post(endpoint, json=json_data, headers=headers)
        # Add more HTTP methods as needed
        # ...
        # Return response and parsed JSON data
        return response, json.loads(response.data)

    return _test_request


# @pytest.fixture
# def logged_in_client(client):
#     client.post(
#         "/auth/",
#         data={
#             "login_type": "token",
#             "login_input": os.environ["GITHUBAPI_TOKEN"],
#         },
#     )
#     return client


# @pytest.fixture()
# def runner(test_app):
#     return test_app.test_cli_runner()
