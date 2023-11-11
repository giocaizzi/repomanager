"""data models"""
import github


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


class BaseError(Exception):
    known_exception = True

    def __init__(self, message, original_exception=None):
        super().__init__(message, original_exception)
        self.message = message
        self.original_exception = original_exception


class LoginError(BaseError):
    pass


class GitHubAPI:
    def __init__(self, token: str):
        self._github = github.Github(auth=github.Auth.Token(token))

    @property
    def github(self):
        return self._github

    def get_user(self):
        return self.github.get_user()


class User(GitHubAPI):
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
        return f"GithubClient(login={self.login}, repos={len(self.repos)})"

    def __repr__(self) -> str:
        return str(self)


class Repository:
    _repo: github.Repository = None

    def __init__(self, repo: github.Repository):
        self._repo = repo

    @property
    def owner(self):
        return self._repo.owner.login

    @property
    def name(self):
        return self._repo.name

    @property
    def url(self):
        return self._repo.html_url

    @property
    def description(self):
        return self._repo.description

    @property
    def language(self):
        return self._repo.language

    @property
    def stars(self):
        return self._repo.stargazers_count

    @property
    def pages(self):
        return self._repo.has_pages

    @property
    def private(self):
        return self._repo.private

    # custom methods
    def _get_more_info(
        self,
    ):
        # list of issues
        self.issues = self.repo.get_issues()
        # list of pull requests
        self.pull_requests = self.repo.get_pulls()
        # list of branches
        self.branches = self.repo.get_branches()
        # list of forks
        self.forks = self.repo.get_forks()
        # list of collaborators
        self.collaborators = self.repo.get_collaborators()
        # list of workflows
        self.workflows = self.repo.get_workflows()

    def __str__(self) -> str:
        return f"Repository(name={self.name})"

    def __repr__(self) -> str:
        return str(self)
