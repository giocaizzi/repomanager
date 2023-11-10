"""data models"""
import github


class User:
    def __init__(self, token: str):
        # pygithub
        self._github = github.Github(auth=github.Auth.Token(token))

        # basic calls to get basic info
        self._user = self._github.get_user()
        self._repos = [Repository(repo) for repo in self._user.get_repos()]

    @property
    def github(self):
        return self._github

    @property
    def repos(self):
        return self._repos

    @property
    def user(self):
        return self._user

    # shortcuts to github.User properties
    @property
    def login(self):
        return self.user.login

    @property
    def name(self):
        return self.user.name

    @property
    def html_url(self):
        return self.user.html_url

    @property
    def avatar_url(self):
        return self.user.avatar_url

    def __str__(self) -> str:
        return f"GithubClient(login={self.login}, repos={len(self.repos)})"

    def __repr__(self) -> str:
        return str(self)


class Repository:
    _repo: github.Repository = None

    def __init__(self, repo: github.Repository):
        self._repo = repo

    @property
    def repo(self):
        return self._repo

    # shortcuts to github.Repository properties
    @property
    def name(self):
        return self.repo.name

    @property
    def url(self):
        return self.repo.html_url

    @property
    def description(self):
        return self.repo.description

    @property
    def language(self):
        return self.repo.language

    @property
    def stars(self):
        return self.repo.stargazers_count

    @property
    def pages(self):
        return self.repo.has_pages

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
