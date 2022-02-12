FROM node:14-alpine

ARG user=node
ARG group=node

WORKDIR /usr/src/app

RUN apk add --update \
  bash \
  lcms2-dev \
  libpng-dev \
  gcc \
  g++ \
  make \
  autoconf \
  automake \
  curl \
  && rm -rf /var/cache/apk/*

COPY --chown=${user}:${group} . .

ADD .env.prod /usr/src/app/.env

RUN chown -Rh ${user}:${group} /usr/src/app

USER node

RUN sed -i 's/\r//g' run-database-migration.sh && \
  chmod +x run-database-migration.sh

RUN yarn \
  && yarn clean-build \
  && yarn build-prod

EXPOSE 4000

CMD ["yarn", "run-prod"]