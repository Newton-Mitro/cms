FROM node:18-alpine
WORKDIR /app
# RUN apk add --update npm
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]