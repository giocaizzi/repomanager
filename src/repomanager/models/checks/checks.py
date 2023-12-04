"""content checks"""

from ..github.github import Branch


class PackagingChecks:
    _setupy: bool = False
    _setupcfg: bool = False
    _pyproject: bool = False

    def __init__(self, repository_content: Branch):
        self._content = repository_content

    def check_specification(self):
        for file in self._content._content:
            # check the path so to check also its location
            if file.path == "setup.py":
                self._setupy = True
            elif file.path == "setup.cfg":
                self._setupcfg = True
            elif file.path == "pyproject.toml":
                self._pyproject = True
