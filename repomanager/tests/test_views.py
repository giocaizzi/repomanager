import pytest
from flask import session

import os

TEST_USER = "testuser"


# -------- PUBLIC VIEWS --------


def test_home_page(client):
    response = client.get("/")
    # show home page if not logged in
    assert response.status_code == 200