# MosqueConnect Deployment Guide

This guide provides instructions for deploying the MosqueConnect platform in a production-ready environment.

## 1. Prerequisites
- **Docker & Docker Compose**: Version 20.10+
- **PostgreSQL**: Version 16+
- **Redis**: Version 7+
- **Node.js**: Version 20+ (for local builds)

## 2. Environment Configuration
Copy the `.env.example` to `.env` in the root and in each service directory.

### Key Variables:
- `DATABASE_URL`: Connection string for PostgreSQL.
- `REDIS_URL`: Connection string for Redis.
- `JWT_SECRET`: Secure string for signing access tokens.
- `INTERNAL_API_URL`: Internal URL for service-to-service communication (e.g., `http://api-gateway:80/api`).

## 3. Deployment with Docker Compose
The platform is fully containerized. To start the entire stack:

```bash
docker compose -f docker-compose.prod.yml up -d
```

### Services & Ports:
- **Frontend (Next.js)**: 3000
- **Identity Service**: 4001
- **Mosque Service**: 4002
- **Prayer & Event Service**: 4003
- **Community Service**: 4004
- **Governance Service**: 4005
- **Library Service**: 4006
- **Finance Service**: 4007

## 4. CI/CD Pipeline
The project includes a GitHub Actions workflow in `.github/workflows/ci.yml`. It automatically runs on every push and pull request to `main`, `master`, or `develop`.

Checks performed:
1. **Linting**: `npm run lint`
2. **Type Checking**: `npm run typecheck`
3. **Unit Testing**: `npm test`

## 5. Health Monitoring
Each service exposes a standardized health endpoint at `/health`.

Example Response:
```json
{
  "status": "ok",
  "service": "identity-service",
  "timestamp": "2026-03-18T10:00:00.000Z",
  "uptime": 3600,
  "database": "connected"
}
```

Prometheus can scrape these endpoints for centralized monitoring.

## 6. Security Best Practices
- **TLS/SSL**: Always use a reverse proxy (e.g., Nginx) with Let's Encrypt for HTTPS.
- **Secrets Management**: Do not commit actual `.env` files. Use a secret manager (e.g., GitHub Secrets, Vault).
- **Database Backups**: Schedule daily automated backups and verify PITR.
