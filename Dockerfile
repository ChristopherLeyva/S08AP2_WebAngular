# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Serve the static files from the browser build
CMD ["serve", "-s", "dist/web-ssr/browser", "-l", "8080"]
