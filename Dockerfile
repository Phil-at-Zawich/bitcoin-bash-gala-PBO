# Build stage
FROM --platform=$BUILDPLATFORM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM --platform=$TARGETPLATFORM nginx:alpine

# Create necessary directories and set permissions
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp && \
    chmod -R 777 /var/cache/nginx /var/run /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx

# Create a non-root user
RUN adduser -D appuser && \
    chown -R appuser:appuser /usr/share/nginx/html

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Set proper permissions
RUN chown -R appuser:appuser /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Switch to non-root user
USER appuser

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 