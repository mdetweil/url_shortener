FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . /app

EXPOSE 8080

CMD [ "yarn", "serve" ]
