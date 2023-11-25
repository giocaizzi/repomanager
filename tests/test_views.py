import pytest
import os


# -------- PUBLIC VIEWS --------


def test_home_page(client):
    response = client.get("/")
    # redirected to public.home view if not logged in
    assert response.status_code == 302


def test_about_page(client):
    response = client.get("/about/")
    assert response.status_code == 200


# ---------- AUTH VIEWS ----------


def test_login_page(client):
    response = client.get("/login/")
    assert response.status_code == 200


def test_auth_page_token(client):
    response = client.post(
        "/auth/",
        data={
            "login_type": "token",
            "login_input": os.environ["GITHUB_TOKEN"],
        },
    )
    # Should redirect to user page
    assert response.status_code == 302


def test_auth_page_password(client):
    response = client.post(
        "/auth/", data={"login_type": "password", "login_input": "placeholder"}
    )
    # internal server error Not Implemented
    assert response.status_code == 500


@pytest.fixture
def logged_in_client(client):
    client.post(
        "/auth/",
        data={
            "login_type": "token",
            "login_input": os.environ["GITHUB_TOKEN"],
        },
    )
    return client


# def test_user_page(client):
#     response = client.get("/testuser/")
#     assert response.status_code == 200


# def test_repos_page(client):
#     response = client.get("/testuser/repos/")
#     assert response.status_code == 200


# def test_repo_page(client):
#     response = client.get("/testuser/repos/testrepo/")
#     assert response.status_code == 200
