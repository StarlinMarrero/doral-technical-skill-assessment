FROM node:20.12.2

WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run build && npm run preview"]
