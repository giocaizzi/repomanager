import pytest


def test_home_page(client):
    response = client.get("/")
    assert response.status_code == 200


# def test_about_page(client):
#     response = client.get("/about/")
#     assert response.status_code == 200


# def test_login_page(client):
#     response = client.get("/login/")
#     assert response.status_code == 200


# def test_logout_page(client):
#     response = client.get("/logout/")
#     assert response.status_code == 302  # Should redirect to home


# def test_auth_page(client):
#     response = client.post(
#         "/auth/", data={"login_type": "test", "login_input": "test"}
#     )
#     assert response.status_code == 302  # Should redirect to user page


# def test_user_page(client):
#     response = client.get("/testuser/")
#     assert response.status_code == 200


# def test_repos_page(client):
#     response = client.get("/testuser/repos/")
#     assert response.status_code == 200


# def test_repo_page(client):
#     response = client.get("/testuser/repos/testrepo/")
#     assert response.status_code == 200
