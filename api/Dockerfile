FROM node:lts-alpine

WORKDIR /urs/src/app
RUN npm install -g fastify-cli

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
