FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:5000

RUN yarn install

CMD ["yarn", "start"]