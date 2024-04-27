# Dockerfile

FROM node:20.12.2

WORKDIR /usr/src/app/backend
COPY package*.json ./ 
RUN npm install
COPY . .
EXPOSE 4000
CMD ["sh", "-c", "npm run build && npm run start:prod"]