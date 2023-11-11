"""utils"""


class BaseError(Exception):
    known_exception = True


class LoginError(BaseError):
    pass


class IterableProrprieties:
    """make the class iterable over all its properties"""

    def __iter__(self):
        for attr in dir(self):
            if (
                not callable(getattr(self, attr))
                and not attr.startswith("__")
                and not attr.startswith("_")
            ):
                yield attr, getattr(self, attr)
