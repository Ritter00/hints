FROM python:3.8.10-alpine
# set work directory
WORKDIR /delivery-solution
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev libffi-dev openssl-dev

RUN apk --update add \
    build-base \
    jpeg-dev \
    zlib-dev \
    gettext \
    gettext-dev
# install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade pip \
    && pip install -U pip setuptools \
    && pip install -r requirements.txt 

# copy project
COPY . .
# run entrypoint.sh
ENTRYPOINT ["/delivery-solution/entrypoint.sh"]