ENV VITE_HOST ${VITE_HOST}
# First stage: Build node app
FROM node:16 AS build-client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Second stage: Serve static files with nginx
FROM nginx:alpine
COPY --from=build-client /app/client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

