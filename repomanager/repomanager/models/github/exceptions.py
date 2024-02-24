"""utils"""


class RepomanagerBaseError(Exception):
    known_exception = True


class LoginError(RepomanagerBaseError):
    pass


class UnsupportedLoginType(RepomanagerBaseError):
    pass


class UnknownLoginType(RepomanagerBaseError):
    pass
