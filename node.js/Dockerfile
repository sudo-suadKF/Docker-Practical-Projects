FROM node:24-slim

WORKDIR /app

COPY package*.json .

RUN npm install

EXPOSE 1199

COPY . .

CMD ["npm", "run", "dev"]