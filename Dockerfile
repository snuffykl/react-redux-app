FROM node:8.9.0-alpine

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]