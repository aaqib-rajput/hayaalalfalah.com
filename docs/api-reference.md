# MosqueConnect API Reference

This document provides an overview of the microservices API endpoints.

## Base URLs (Development)

- **Identity Service:** `http://localhost:4001/api/auth`
- **Mosque Service:** `http://localhost:4002/api`
- **Prayer Service:** `http://localhost:4003/api`
- **Community Service:** `http://localhost:4004/api`
- **Governance Service:** `http://localhost:4005/api`
- **Library Service:** `http://localhost:4006/api`
- **Finance Service:** `http://localhost:4007/api`

---

## Mosque Service

### Mosques
- `GET /mosques` - Get all mosques
- `GET /mosques/:id` - Get mosque by ID
- `GET /mosques/:id/imams` - Get imams for a mosque
- `GET /mosques/:id/management` - Get management for a mosque

---

## Identity Service

### Auth
- `GET /auth/me` - Get current authenticated user

---

## Community Service

### Announcements
- `GET /community/announcements` - Get all announcements
- `GET /mosques/:id/announcements` - Get announcements for a mosque
- `GET /community/feed` - Get community feed

---

## Prayer Service

### Prayer Times
- `GET /prayer-times` - Get prayer times for today

### Events
- `GET /events` - Get all events
- `GET /events/:id` - Get event by ID
- `GET /mosques/:id/events` - Get events for a mosque
