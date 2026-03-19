FROM node:20-alpine AS base

# Step 1: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy root configurations
COPY package.json package-lock.json* ./

# Copy shared packages
COPY packages ./packages

# Copy service package.json
COPY services/identity-service/package.json ./services/identity-service/

# Install dependencies (respecting workspaces)
RUN npm ci

# Step 2: Build the service
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY . .

# Generate Prisma client and build
RUN npm run build -w @mosqueconnect/shared-types
RUN npm run build -w @mosqueconnect/shared-utils
RUN npx prisma generate --schema=services/identity-service/prisma/schema.prisma
RUN npm run build --workspace=identity-service

# Step 3: Production runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

# Copy built assets
COPY --from=builder /app/services/identity-service/dist ./services/identity-service/dist
COPY --from=builder /app/services/identity-service/package.json ./services/identity-service/package.json
COPY --from=builder /app/services/identity-service/prisma ./services/identity-service/prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

USER nodejs

EXPOSE 4001

CMD ["npm", "start", "--workspace=identity-service"]
