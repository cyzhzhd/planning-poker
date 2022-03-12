FROM node:17.5.0-alpine

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache
RUN npm install -g react-scripts
RUN npm install -g react-router-dom
RUN apk add --no-cache git

COPY . /app

RUN chown -R node /app/node_modules

USER node

CMD ["npm", "start"]
