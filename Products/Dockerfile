FROM node:18-alpine

ENV PORT=5001
ENV PUBLICKEY=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2CLJyVVKtHZuOlHbDKe+2VdHK+v/4Rkm1yu7JBhaZ2uTn/7GlUZsByxfqobfX7kVuwfTv6G5tkLnKNF1woCZzsx7HHPQIp6QqS6jhOiBP9IQFb2Ul9Vvw+5U3VO4w1ohpLygo7br07WRY9URRvKNpkBFEOqP/lrVxK3nhJw0252mtXRh8gxdmsEJHhVg6/itM8Xm9Q/hw3t8TDZPzpcrCoFugBbxyOvw0BGTFa7Zfvz0PLznIHGCZKnWVUxBfW610Yb5fGKgCMBwivKd3ym/n7ywAPLgrO/6GcD+Qen2axxvxp2l5n5YDls5qvEILHFtT9IjtwJ26bCcWM31ZNqv0wIDAQAB

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install nodemon --save-dev
RUN npm install
COPY . .

EXPOSE 5001
CMD [ "npm", "start" ]