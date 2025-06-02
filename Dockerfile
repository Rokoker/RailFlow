# Этап 1: сборка фронта
FROM node:18 as builder
WORKDIR /app
COPY frontend .
RUN npm install && npm run build

# Этап 2: nginx
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
