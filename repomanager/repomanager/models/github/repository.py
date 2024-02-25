"""github repository"""

import github

from .branch import Branch
from . import IterableProrprieties


class Repository(IterableProrprieties):
    """wrapper around github.Repository object"""

    _repo: github.Repository = None
    _branches: list = None

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

    @property
    def fork(self):
        return self._repo.fork

    @property
    def topics(self):
        return self._repo.get_topics()

    @property
    def default_branch(self):
        return self._repo.default_branch

    def get_branches(self):
        return [Branch(x) for x in self._repo.get_branches()]

    def get_branch_content(self):
        """get content of default branch"""
        contents = self._repo.get_contents("", ref=self.default_branch)
        files = []
        while contents:
            file_content = contents.pop(0)
            if file_content.type == "dir":
                contents.extend(self._repo.get_contents(file_content.path))
            else:
                files.append(file_content)
        return Branch(files)

    def __str__(self) -> str:
        return f"Repository(name={self.name})"

    def __repr__(self) -> str:
        return str(self)

    def to_json(self):
        return {
            "owner": self.owner,
            "name": self.name,
            "url": self.url,
            "description": self.description,
            "language": self.language,
            "stars": self.stars,
            "pages": self.pages,
            "private": self.private,
            "fork": self.fork,
            "topics": self.topics,
            "default_branch": self.default_branch,
            "branches": [],
        }