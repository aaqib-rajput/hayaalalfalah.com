# MosqueConnect Project Overview

## What This Repo Ships Today

MosqueConnect is currently scoped as a production MVP for:

- browsing mosques
- viewing mosque details, imams, management, books, donation goals, announcements, and events
- checking prayer times through the internal prayer service
- registering and logging in with email/password
- managing mosques, imams, events, announcements, and finance from the admin area

The frontend is a Next.js app in `frontend/`, and the backend remains split into TypeScript microservices under `services/`.

## What Was Intentionally Deferred

These areas are not part of the MVP launch surface:

- social feed
- community hub pages
- Shura workflows
- live spaces and meetings
- notification streaming UI
- library inventory items and borrowing workflows

The related backend services may still exist in the repo, but the frontend production surface does not expose them.

## Recent Production Readiness Work

- standardized the repo on `npm`
- added a working ESLint flat config and stable workspace test config
- fixed workspace type resolution and removed ignored frontend type errors from the build
- moved auth to HTTP-only cookie sessions
- added authenticated `/api/auth/me` and `/api/auth/logout`
- aligned mosque, event, announcement, finance, and library APIs with the kept MVP pages
- removed global store bootstrapping and replaced it with route-scoped live data loading
- removed browser-side third-party prayer-time fetching from the MVP UI
- trimmed deferred routes from the final Next.js route surface

## Local Verification

Use these commands as the baseline health check:

```bash
npm run lint
npm run typecheck
npm test -- --run
npm run build --workspace=frontend
```

## Deployment Direction

The intended production shape is a Docker or VPS deployment with:

- frontend
- api gateway
- identity service
- mosque service
- prayer-event service
- community service
- finance service
- library service

Managed Postgres and Redis are preferred where available.
