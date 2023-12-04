"""github branch"""

from typing import List

from github.ContentFile import ContentFile


class Branch:
    """list of github.ContentFile objects"""

    _content = None

    def __init__(self, files: List[ContentFile]) -> None:
        self._files = files

    @property
    def files(self):
        return self._files
