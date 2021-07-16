FROM nginx:latest AS build
WORKDIR 80
EXPOSE 80
RUN yarn install
RUN yarn build

COPY --from=build /build/ /usr/share/nginx/html/
