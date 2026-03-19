# Generic Dockerfile for monorepo services
FROM node:20-alpine AS base
WORKDIR /app

# Copy root configs
COPY package*.json ./
COPY packages ./packages

# Copy service configs
COPY services/mosque-service/package*.json ./services/mosque-service/

# Install dependencies (workspaces will handle links)
RUN npm install

# Copy service source
COPY services/mosque-service ./services/mosque-service

# Build the service
RUN npm run build -w @mosqueconnect/shared-types
RUN npm run build -w @mosqueconnect/shared-utils
RUN npm run build --workspace=mosque-service

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=base /app ./

EXPOSE 4002
CMD ["npm", "start", "--workspace=mosque-service"]
