FROM node:21 AS build
 
WORKDIR /app
 
COPY . .
 
RUN yarn install
 
RUN yarn build
 
FROM nginx:alpine
 
COPY --from=build /app/dist /usr/share/nginx/html
 
EXPOSE 80
 
CMD ["nginx", "-g", "daemon off;"]
