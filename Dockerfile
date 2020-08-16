# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:latest as node

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN $(npm bin)/ng build --prod

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13.12-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/dist/enlink /usr/share/nginx/html

