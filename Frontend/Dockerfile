FROM node:20.11.1
#FROM node:20-alpine

#FROM alpine:3.19

#ENV NODE_VERSION 20.14.0

WORKDIR /app
COPY package.json .
#COPY package-lock.json .
RUN npm install -g npm@10.8.1
RUN npm install
#RUN npm install react-scripts
#RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
#CMD ["./node_modules/.bin/react-scripts", "start"]

CMD ["npm", "start"]

#CMD ["tail", "-F", "Something"]