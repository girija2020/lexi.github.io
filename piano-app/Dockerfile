# Stage 1: build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy built static assets (Vite -> /dist). Change to /build for CRA.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
