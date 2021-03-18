FROM node:14.15.5-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
