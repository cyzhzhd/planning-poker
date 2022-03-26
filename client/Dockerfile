FROM node:16.5.0-alpine

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache
RUN apk add --no-cache git

COPY . /app

RUN chown -R node /app/node_modules

USER node

ARG SERVER_URL
ARG ENVOY_PORT
ENV REACT_APP_SERVER_URL=$SERVER_URL
ENV REACT_APP_SERVER_PORT=$ENVOY_PORT

CMD ["npm", "start"]