FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3005
ENV NODE_ENV=production
CMD npm start
