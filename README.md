# Stock Market 1963 Digital

Modern adaptation of the 1963 Whitman Stock Market Game. Players roll dice, move around the original board, and buy/sell stocks with automated rules enforcement, turn tracking, and save/resume.

## What we’re building
- Faithful board + 1963 price ladder with automated square effects (dividends, splits, penalties, market moves).
- Pure TypeScript game engine decoupled from the UI for reuse across web and future multiplayer/mobile.
- Hot-seat local play on a single device with localStorage auto-saves after each action.
- Clear turn flow, interactive board, and portfolio dashboard; later phase adds join-code online play via Supabase.

## Stack
- React + TypeScript (Vite), Tailwind CSS.
- Zustand store (persist + devtools) over a pure TS rules engine.
- Supabase planned for v2 online multiplayer sync.

## Planning docs
- Mission: `agent-os/product/mission.md`
- Roadmap: `agent-os/product/roadmap.md`
- Tech stack: `agent-os/product/tech-stack.md`

Current priority feature: turn-based core engine + price ladder logic as per the roadmap.
