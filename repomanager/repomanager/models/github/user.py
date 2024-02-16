"""github user"""

from .repository import Repository

from .github import GitHubAPI
from .exceptions import LoginError


def _login(login_type=None, login_input=None):
    """Returns a GithubClient object based on the login type and input.

    Raises:
        LoginError: If the login fails.
        ValueError: If the login type is not recognized.
        NotImplementedError: If the login type is not implemented.
    """
    if login_type == "token":
        try:
            return User(token=login_input)
        except Exception as e:
            raise LoginError("Login with token failed.", e)
    elif login_type == "username":
        raise LoginError("Only token login is currently supported.")
    else:
        raise LoginError(f"Unknown login type : {login_type}")


class User(GitHubAPI):
    """wrapper around github.User object"""

    def __init__(self, token: str):
        super().__init__(token)

        # github.User object
        # so to make the call only once
        self._user = self.get_user()
        # Repository objects from a single call to github.User.get_repos()
        self._repos = [Repository(repo) for repo in self._user.get_repos()]

    # list of custom Repository objects
    @property
    def repos(self):
        return self._repos

    # shortcuts to github.User properties
    @property
    def login(self):
        return self._user.login

    @property
    def name(self):
        return self._user.name

    @property
    def html_url(self):
        return self._user.html_url

    @property
    def avatar_url(self):
        return self._user.avatar_url

    def get_respository(self, name):
        for repo in self.repos:
            if repo.name == name:
                return repo

    def __str__(self) -> str:
        return f"User(login={self.login}, repos={len(self.repos)})"

    def __repr__(self) -> str:
        return str(self)
