FROM node:latest AS build
WORKDIR /app
EXPOSE 80

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
