FROM node:latest AS build
WORKDIR /app
EXPOSE 80
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
