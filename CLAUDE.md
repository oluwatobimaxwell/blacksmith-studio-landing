## Critical Rules

> **These rules are mandatory. Violating them produces broken, inconsistent code.**

### 1. Use `@chakra-ui/react` for ALL UI
- **Layout**: Use `VStack`, `HStack`, `Flex`, `SimpleGrid`, `Box`, `Container` — NEVER `<div className="flex ...">` or `<div className="grid ...">`
- **Typography**: Use `Heading` and `Text` — NEVER raw `<h1>`–`<h6>`, `<p>`, or `<span>` with text classes
- **Separators**: Use `Divider` — NEVER `<hr>`
- **Everything else**: `Button`, `Card`, `Badge`, `Input`, `Table`, `Modal`, `Alert`, `Skeleton`, `Stat`, etc.
- **Exceptions**: Semantic HTML landmarks (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<aside>`) are acceptable for page structure. `<form>` is acceptable with React Hook Form. `<Link>` from react-router-dom for navigation
- See the `chakra-ui-react` skill for the full component list

### 2. Pages Are Thin Orchestrators
- Pages import components, call hooks, and compose JSX — they should not contain business logic or large JSX blocks
- Break every page into child components in a `components/` folder. Aim for clarity, not a strict line count
- See the `page-structure` skill for the full pattern with examples

### 3. Components Render, Hooks Think
- Extract ALL logic into hooks in a `hooks/` folder — API calls, mutations, form setup, filtering, pagination, debouncing, computed state
- Components should contain only JSX composition, prop passing, and simple event handler wiring
- The only `useState` acceptable inline in a component is a simple UI toggle (e.g. modal open/close)
- If a component has more than one `useState`, one `useEffect`, or any `useApiQuery`/`useApiMutation` — extract to a hook

### 4. Use the `Path` Enum — Never Hardcode Paths
- All route paths are in `src/router/paths.ts` as a `Path` enum
- Use `Path.Login`, `Path.Dashboard`, etc. in `navigate()`, `<Link to={}>`, and route definitions
- When adding a new page, add its path to the enum before `// blacksmith:path`
- Use `buildPath(Path.ResetPassword, { token })` for dynamic segments

### 5. API Hooks vs UI Hooks — Two Different Places
- **API hooks** (data fetching) → `src/api/hooks/<resource>/` — queries, mutations, cache invalidation. Import as: `import { usePosts } from '@/api/hooks/posts'`
- **UI hooks** (page logic) → `pages/<page>/hooks/` or `features/<feature>/hooks/` — form state, pagination, filtering, debouncing
- Never put API data fetching in page-level hooks. Never put UI-only logic in `src/api/hooks/`
- See the `react-query` skill for API hook conventions

### 6. Use Generated API Client Code
- Always check `src/api/generated/` first before writing any API calls — use the generated types, query options, mutations, and query keys
- Only write manual API client code when no generated code exists for the endpoint (e.g. the endpoint hasn't been synced yet)
- **In fullstack projects:** after creating or modifying any backend endpoint (views, serializers, URLs), run `blacksmith sync` from the project root to regenerate the frontend API client before writing frontend code that consumes it

### 7. Prioritize Modularization and Code Reuse
- **Always reuse before writing** — before creating a new function, search the codebase for an existing one that does the same thing or can be extended
- **Extract reusable logic to utils** — if a function can be useful outside the file it lives in, move it to a `utils/` folder. This applies to both frontend and backend
  - Frontend: page/feature-scoped → `<page>/utils/`; app-wide → `src/shared/utils/`
  - Backend: app-scoped → `apps/<app>/utils.py` (or `utils/` package); project-wide → `utils/` at the backend root
- **No inline helper functions** — standalone functions sitting in component files, view files, or serializer files should be extracted to utils
- **No duplicated logic** — if the same logic appears in two places, extract it into a shared utility immediately
- See the `frontend-modularization` and `backend-modularization` skills for full conventions

### 8. Follow the Page/Feature Folder Structure
```
pages/<page>/
├── <page>.tsx         # Thin orchestrator (default export)
├── routes.tsx         # RouteObject[] using Path enum
├── index.ts           # Re-exports public API
├── components/        # Child components
└── hooks/             # Page-local hooks (UI logic only, not API hooks)
```
- See the `page-structure` skill for full conventions

## AI Skills

Detailed skills and conventions are in `.claude/skills/`:

- `.claude/skills/project-overview/SKILL.md` — Project Overview
- `.claude/skills/react/SKILL.md` — React Frontend Conventions
- `.claude/skills/react-query/SKILL.md` — TanStack React Query
- `.claude/skills/page-structure/SKILL.md` — Page & Route Structure
- `.claude/skills/frontend-modularization/SKILL.md` — Frontend Modularization
- `.claude/skills/chakra-ui-react/SKILL.md` — Chakra UI React
- `.claude/skills/chakra-ui-forms/SKILL.md` — Chakra UI Forms
- `.claude/skills/chakra-ui-auth/SKILL.md` — Custom Auth System
- `.claude/skills/blacksmith-hooks/SKILL.md` — Custom Hooks & Chakra UI Hooks
- `.claude/skills/ui-design/SKILL.md` — UI/UX Design System
- `.claude/skills/frontend-testing/SKILL.md` — Frontend Testing Conventions
- `.claude/skills/blacksmith-cli/SKILL.md` — Blacksmith CLI
- `.claude/skills/programming-paradigms/SKILL.md` — Programming Paradigms
- `.claude/skills/clean-code/SKILL.md` — Clean Code Principles
- `.claude/skills/ai-guidelines/SKILL.md` — AI Development Guidelines

These files are auto-loaded by Claude Code. Run `blacksmith setup:ai` to regenerate.

<!-- blacksmith:graphify:start -->
## Knowledge Graph (Graphify)

This project has a pre-built knowledge graph at `.blacksmith/graphify/`.

Rules:
- Before exploring the codebase with Glob/Grep/Read, read `.blacksmith/graphify/GRAPH_REPORT.md`
  for the structural overview — god nodes, communities, and file relationships.
- Use the graph to navigate directly to relevant files instead of scanning broadly.
- Only Read files you need to modify or understand in detail — the graph already maps the structure.

Stats: 328 nodes · 140 edges · Built 2026-04-24
<!-- blacksmith:graphify:end -->
