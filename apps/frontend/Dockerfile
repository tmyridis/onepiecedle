FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm ci

RUN npx nx reset
RUN npx nx build frontend

FROM nginx:stable-alpine
COPY --from=build /app/dist/apps/frontend /usr/share/nginx/html
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
