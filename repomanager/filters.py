"""jinja2 filters"""
from markupsafe import Markup


# app filters
def is_none_filter(value):
    return value is None


def is_different_filter(value1, value2):
    return value1 != value2


class Icon:
    _unicode = False
    _str = None

    def __init__(self, str, unicode: bool = False):
        self._str = str
        self._unicode = unicode

    @property
    def unicode(self):
        return self._unicode

    @property
    def div(self):
        if self.unicode:
            return Markup("<div class='unicode'>&#" + self._str + ";</div>")
        else:
            return Markup('<img class="icon" src="' + self._str + '" alt="">')


ICONS = {
    "defaults": {
        True: Icon("9989", True),  # unicode checkmark
        False: Icon("10060", True),  # unicode cross
    },
    "language": {
        "Python": Icon("/static/img/python.png"),
        "JavaScript": Icon("/static/img/javascript.png"),
        "Jupyter Notebook": Icon("/static/img/jupyter_notebook.png"),
        "TeX": Icon("/static/img/tex.png"),
    },
    "private": {
        True: Icon("/static/img/private.png"),
        False: Icon("/static/img/public.png"),
    },
}


def icon_filter(value, collection=None):
    # if value is iterable (list or dict)
    # return value
    if isinstance(value, list) or isinstance(value, dict):
        return value
    else:
        # if group is not passed
        if collection is None:
            # check defaults in
            if value in ICONS["defaults"]:
                return ICONS["defaults"][value].div
            else:
                return value
        else:
            if collection in ICONS:
                if value in ICONS[collection]:
                    return ICONS[collection][value].div
                else:
                    return value
            else:
                # check if there is an icon in defaults
                if value in ICONS["defaults"]:
                    return ICONS["defaults"][value].div
                else:
                    return value