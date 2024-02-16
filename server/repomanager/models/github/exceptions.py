"""utils"""


class RepomanagerBaseError(Exception):
    known_exception = True


class LoginError(RepomanagerBaseError):
    pass
