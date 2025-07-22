FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm ci

RUN npx nx reset
RUN npx nx build backend

FROM node:18-alpine
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist/apps/backend ./

EXPOSE 5000
CMD ["node", "main.js"]
