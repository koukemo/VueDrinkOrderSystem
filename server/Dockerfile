FROM node:18.1-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm && \
    npm install -g express && \
    npm install -g cors && \
    npm install -g sqlite3

ENV NODE_PATH=/usr/local/lib/node_modules

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]