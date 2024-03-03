import pytest
import os

from repomanager.models.github.exceptions import UnknownLoginType

# -------- MIDDLEWARE TESTS --------

# Test middleware by sending requests to user route
# with and without token in the header


# test token is missing
def test_missing_token(client, test_request):
    response, data = test_request("/{TEST_USERNAME}/")
    assert response.status_code == 401
    assert data["message"] == "Token is missing!"


# test token invalid specification
def test_invalid_token(client, test_request):
    headers = {"Authorization": "invalid_token"}
    response, data = test_request("/{TEST_USERNAME}/", method="get", headers=headers)
    assert response.status_code == 401
    assert "Invalid token specification." in data["message"]


# test invalid auth type
def test_invalid_auth_type(client, test_request):
    headers = {"Authorization": "Basic invalid_token"}
    response, data = test_request("/{TEST_USERNAME}/", method="get", headers=headers)
    assert response.status_code == 401
    assert "Invalid Authorization type." in data["message"]


# test invalid token
def test_valid_token(client, test_request):
    headers = {"Authorization": "Bearer valid_token"}
    response, data = test_request("/{TEST_USERNAME}/", method="get", headers=headers)
    print(response, data)
    assert response.status_code == 401
    # invalid token
    assert data["message"] == "Invalid token!"
    # error is logged
    assert "error" in data


# test valid token
def test_valid_token(logged_in_client, test_request):
    headers = {"Authorization": logged_in_client.environ_base["Authorization"]}
    # if request is valid, repomanager will throw error
    # because `test_login_type` is not a valid login type
    # throwing UnknownLoginType error
    with pytest.raises(UnknownLoginType):
        response, data = test_request(
            "/{TEST_USERNAME}/", method="get", headers=headers
        )
