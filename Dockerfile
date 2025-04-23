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
FROM --platform=$TARGETPLATFORM node:20-alpine

# Set working directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist .

# Create a non-root user
RUN adduser -D appuser && \
    chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8080

# Start serve with SPA configuration
CMD ["serve", "-s", ".", "-p", "8080"]
