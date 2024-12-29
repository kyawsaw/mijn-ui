# Stage 1: App builder
FROM node:18-alpine AS builder
RUN apk update
RUN apk add --no-cache libc6-compat git

# Setup pnpm on the alpine base
RUN npm install pnpm --global

# Set working directory
WORKDIR /app

# Copy the rest of the application files
COPY . .

RUN pnpm install
RUN pnpm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
