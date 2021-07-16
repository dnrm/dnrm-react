FROM nginx:latest AS build
WORKDIR /app
EXPOSE 80
RUN yarn install
RUN yarn build

COPY --from=build /build/ /usr/share/nginx/html/
