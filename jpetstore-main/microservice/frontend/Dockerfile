FROM node:latest

WORKDIR /app

#install lib
COPY package.json ./
COPY package-lock.json ./
RUN npm install

#copy remaining files
COPY . .
CMD ["npm", "start"]