import pytest

from importlib import metadata

TEST_USERNAME = "testuser"

# -------- PUBLIC VIEWS --------


def test_home_page(client, test_request):
    response, data = test_request("/")
    assert response.status_code == 200
    assert response.status_code == 200
    assert data["message"] == "Welcome to the Repomanager API"
    assert data["version"] == metadata.metadata("repomanager")["version"]


# -------- USER VIEWS --------
