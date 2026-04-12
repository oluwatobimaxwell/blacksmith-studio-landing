---
name: Project Overview
description: Overview of the project structure, commands, and development workflow.
---

# blacksmith-studio-web

A web application scaffolded by **Blacksmith CLI**. Check `blacksmith.config.json` at the project root for the project type (`fullstack`, `backend`, or `frontend`) and configuration.

## Project Structure

The structure depends on the project type configured in `blacksmith.config.json`:

**Fullstack** (`type: "fullstack"`) — Django backend + React frontend in subdirectories:
```
blacksmith-studio-web/
├── backend/              # Django project
│   ├── apps/             # Django apps (one per resource)
│   ├── config/           # Django settings, urls, wsgi/asgi
│   ├── utils/            # Shared backend utilities
│   ├── manage.py
│   └── venv/             # Python virtual environment
├── frontend/             # React + Vite project
│   ├── src/
│   │   ├── api/          # API client and hooks
│   │   ├── features/     # Feature modules (auth, etc.)
│   │   ├── pages/        # Top-level pages
│   │   ├── router/       # React Router setup
│   │   └── shared/       # Shared components, hooks, utils
│   └── package.json
├── blacksmith.config.json
└── CLAUDE.md
```

**Backend-only** (`type: "backend"`) — Django project at root:
```
blacksmith-studio-web/
├── apps/
├── config/
├── utils/
├── manage.py
├── venv/
└── blacksmith.config.json
```

**Frontend-only** (`type: "frontend"`) — React project at root:
```
blacksmith-studio-web/
├── src/
│   ├── api/
│   ├── pages/
│   ├── router/
│   └── shared/
├── package.json
└── blacksmith.config.json
```

## Commands

| Command | Fullstack | Backend | Frontend |
|---|---|---|---|
| `blacksmith dev` | Django + Vite + sync | Django only | Vite only |
| `blacksmith sync` | Regenerate frontend types | N/A | N/A |
| `blacksmith make:resource <Name>` | Both ends | Backend only | Frontend only |
| `blacksmith build` | Both | collectstatic | Vite build |
| `blacksmith eject` | Remove Blacksmith | Remove Blacksmith | Remove Blacksmith |

## Development Workflow

**Fullstack:**
1. Define models, serializers, and viewsets in the backend
2. Run `blacksmith sync` to generate TypeScript types and API client
3. Build frontend features using the generated hooks and types

**Backend-only:**
1. Define models, serializers, and viewsets
2. Run migrations and test endpoints

**Frontend-only:**
1. Build pages and components
2. Create API hooks in `src/api/hooks/` for data fetching
