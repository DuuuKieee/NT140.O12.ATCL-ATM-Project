FROM node:18-alpine
ENV VITE_KEYCLOAK_URL=http://127.0.0.1:8080/
ENV VITE_KEYCLOAK_REALM=myrealm
ENV VITE_KEYCLOAK_CLIENT=myclient
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -D sass
COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]