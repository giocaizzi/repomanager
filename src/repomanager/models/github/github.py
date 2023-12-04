"""data models"""
import github


class GitHubAPI:
    """wrapper around github.Github object"""
    _github: github.Github = None

    def __init__(self, token: str):
        self._github = github.Github(auth=github.Auth.Token(token))

    @property
    def github(self):
        return self._github

    def get_user(self):
        return self.github.get_user()
