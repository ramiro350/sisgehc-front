FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache --virtual .yarn-deps yarn

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]