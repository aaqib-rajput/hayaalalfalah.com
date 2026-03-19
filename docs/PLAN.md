# MosqueConnect Production MVP Plan

**Summary**
- Target a Docker/VPS production MVP while keeping the current microservice split.
- Current state: `next build` passes, but only because `frontend/next.config.mjs` ignores TypeScript build errors; `npm run lint` fails because ESLint/config are missing; `npm run typecheck` fails across shared packages/services; `npm test` fails because compiled `dist` tests are included, workspace package resolution is incomplete, and one frontend API test no longer matches runtime behavior.
- Launch scope: ship public browsing + auth + core mosque/events/prayer/announcements/library/donation pages plus a minimal admin surface; hide unfinished Shura, social feed, live spaces/video meetings, notification SSE, and the dev-only `/test-route`.

**Implementation Changes**
- Tooling baseline: standardize on `npm` only, remove extra lockfiles, add a real ESLint setup, scope Vitest to source tests only, exclude `dist/**` and generated clients, and make CI require `lint`, `typecheck`, `test -- --run`, and `npm run build --workspace=frontend`.
- Workspace/build health: fix package metadata and TS resolution for `@mosqueconnect/shared-*`, add missing inter-package deps, stop relying on tracked build output, and remove `typescript.ignoreBuildErrors` from the frontend build.
- Database readiness: create verified Prisma migrations for the MVP services, align seeds with current schemas, and make production startup run migrations only while keeping seeds dev/staging-only.
- Frontend data model: remove the global `StoreInitializer` fetch-everything behavior, stop seeding core pages from mock/persisted domain stores, and move public domain data to route-scoped typed fetches; keep Zustand only for auth/session and small UI state.
- Route surface: keep `/`, `/mosques`, `/mosques/[id]`, `/events`, `/events/[id]`, `/prayer-times`, `/announcements`, `/login`, `/register`, `/mosques/[id]/library`, `/mosques/[id]/donations`, `/admin`, `/admin/mosques`, `/admin/imams`, `/admin/events`, `/admin/announcements`, `/admin/finance`, and `/admin/settings`; remove or hide `/feed`, `/community`, `/shura/**`, `/admin/community`, and `/test-route`.
- Auth/security: change auth from localStorage bearer tokens to HTTP-only cookies, add `POST /api/auth/logout`, make `GET /api/auth/me` authenticated, update the frontend auth store to track `user` and session status instead of raw tokens, and enforce RBAC on all write/admin endpoints.
- Mosque service: keep read APIs for mosques/imams/management, add the write/update/delete operations needed by the kept admin screens, and align response shapes with frontend types.
- Prayer/Event service: fix the controller/service signature mismatch, move prayer-time fetching/calculation behind the service, support `GET /api/prayer-times?mosqueId=<id>&date=YYYY-MM-DD`, keep event list/detail/by-mosque reads, and add admin create/update/delete for events.
- Community service: reduce MVP scope to announcements only, implement announcement CRUD plus by-mosque reads, and remove MVP dependencies on `/community/feed`, `/community/members`, `/community/spaces`, and `/community/meetings`.
- Finance and library services: keep donation goals public and finance records admin-only; keep books public read-only for MVP; remove MVP dependencies on library items and borrowings until those APIs and workflows exist.
- Governance and notification services: keep them buildable and health-checkable, but do not expose them in launch navigation or production deploy until real APIs replace the placeholder flows.
- Deployment hardening: ship a production compose stack for frontend, api-gateway, identity, mosque, prayer-event, community, finance, and library; use managed Postgres/Redis where possible; keep env validation, `/health` endpoints, graceful shutdown, gateway TLS/rate limiting/security headers, and backup/restore runbooks.
- Documentation reset: rewrite `README`, deployment docs, and API reference so they match the actual MVP surface and operational steps instead of the aspirational full-platform roadmap.

**Public APIs / Interface Changes**
- Auth becomes cookie-based: `POST /api/auth/login` and `POST /api/auth/register` return `{ user }` and set session cookies; `GET /api/auth/me` returns the active user; `POST /api/auth/logout` clears the session.
- Prayer times become query-based and service-owned: `GET /api/prayer-times?mosqueId=<id>&date=YYYY-MM-DD`.
- Announcements become the only MVP community contract: `GET /api/community/announcements`, `GET /api/mosques/:id/announcements`, plus admin write endpoints.
- Frontend types/stores drop token persistence and mock-first domain initialization; deferred interfaces for feed/spaces/meetings/library borrowings/shura workflows are removed from the MVP client.

**Test Plan**
- Tooling gates pass locally and in CI with no ignored type errors: lint, typecheck, unit tests, and frontend production build.
- Service contract tests cover auth, mosque list/detail, prayer times query, events list/detail, announcement CRUD, donation goals, and books list/detail.
- E2E smoke tests cover home page, mosque search/detail, event detail, announcements, register/login/logout, protected admin access, and at least one admin write flow.
- Production smoke verifies compose startup, gateway routing, health endpoints, cookie auth, and that public pages render without mock fallback data or browser-side third-party prayer API calls.

**Assumptions**
- MVP auth is email/password only; OAuth/SSO is deferred.
- `npm` is the single package manager for the repo.
- API versioning stays at the current `/api/*` shape for MVP; `/api/v1` is deferred.
- Shura workflows, live social/community features, notification streaming, and library borrowing/items are explicitly postponed and hidden rather than partially shipped.
