# Dockerfile

FROM node:20.12.2

WORKDIR /usr/src/app/backend
COPY package*.json ./ 
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start:prod"]
