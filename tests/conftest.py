import pytest
import os

from repomanager import create_app


@pytest.fixture()
def test_app():
    app = create_app()

    # set up app for testing
    app.config.update(
        {
            "TESTING": True,
        }
    )

    # other setup can go here

    yield app

    # clean up / reset resources here


@pytest.fixture()
def client(test_app):
    return test_app.test_client()


@pytest.fixture
def logged_in_client(client):
    client.post(
        "/auth/",
        data={
            "login_type": "token",
            "login_input": os.environ["GITHUBAPI_TOKEN"],
        },
    )
    return client


@pytest.fixture()
def runner(test_app):
    return test_app.test_cli_runner()
