# Tech Stack

## Framework & Runtime
- **Application Framework:** React with Vite (SPA)
- **Language/Runtime:** TypeScript on Node.js (strict mode)
- **Package Manager:** npm (swap to pnpm if that is your local default)

## Frontend
- **JavaScript Framework:** React + TypeScript
- **CSS Framework:** Tailwind CSS for board, dashboard, and overlays
- **State Management:** Zustand store (persist + devtools middleware) orchestrating pure TS game engine calls
- **UI Components:** Custom components sized for board layout and modals; headless patterns over heavy UI kits

## Game Logic Layer
- **Domain Layer:** Pure TypeScript functions for rules engine (dice, board movement, square effects, price ladder, validation) decoupled from UI
- **Data Sources:** Canonical 1963 board layout and price ladder encoded as typed data

## Persistence & Sync
- **Local Persistence:** `localStorage` auto-save/load of full game state for hot-seat play
- **Realtime/Multiplayer (v2):** Supabase (Postgres + Realtime) for join-code rooms and state sync

## Testing & Quality
- **Test Framework:** Vitest for unit tests on the game engine and UI logic
- **Component Testing:** React Testing Library for interaction flows (turns, buys/sells, rule triggers)
- **Linting/Formatting:** ESLint (TypeScript rules) + Prettier

## Deployment & Infrastructure
- **Hosting:** Static SPA hosting (e.g., Vercel/Netlify) with environment-ready Supabase config for v2 multiplayer

## Monitoring & Analytics
- **Monitoring (optional):** Console/reporting hooks for gameplay errors; add Sentry or similar if/when multiplayer ships
