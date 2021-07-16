FROM nginx:latest
WORKDIR 80
EXPOSE 80
RUN yarn install
RUN yarn build
COPY ./build /usr/share/nginx/html
