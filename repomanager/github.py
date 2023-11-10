"""data models"""
from github import Github, Auth, Repository


class User:
    def __init__(self, token: str):
        # pygithub
        self._github = Github(auth=Auth.Token(token))
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
    
    @property
    def login(self):
        return self.user.login
    
    @property
    def name(self):
        return self.user.name
    
    @property
    def html_url(self):
        return self.user.html_url

    def __str__(self) -> str:
        return f"RepoManager(login={self.login}, repos={len(self.repos)})"

    def __repr__(self) -> str:
        return str(self)


class Repository:
    name: str = None
    url: str = None
    description: str = None
    language: str = None
    stars: int = None
    issues = None
    pull_requests = None
    branches = None
    forks = None
    pages: bool = None
    collaborators = None
    workflows = None
    _repo = None

    def __init__(self, repo: Repository):
        self._repo = repo
        self._set_basic_info()

    @property
    def repo(self):
        return self._repo

    def _set_basic_info(
        self,
    ):
        self.name = self.repo.name
        self.url = self.repo.html_url
        self.description = self.repo.description
        self.language = self.repo.language
        self.stars = self.repo.stargazers_count
        self.pages = self.repo.has_pages

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
