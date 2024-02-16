FROM python:3.10-slim

# Pinpoint poetry version
RUN pip install poetry==1.7.1

# disable virtualenv creation
ENV POETRY_VIRTUALENVS_CREATE=false

# set work directory
WORKDIR /myapp

# copy only required files
COPY pyproject.toml ./
COPY ./repomanager ./repomanager
# complains about missing readme.md (?), create fake one
RUN touch README.md


# install with poetry, only production dependencies
RUN poetry install --without dev && pip install gunicorn

ARG PORT=5000
ENV PORT ${PORT}

CMD gunicorn -w 1 -t 2 -b "0.0.0.0:$PORT" "repomanager.app:create_app()"