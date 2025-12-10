# Specification: Turn-based core engine (scoped reset)

## Goal
Establish tooling and prep for smaller, vertical specs (logic + minimal UI) instead of one large engine build.

## User Stories
- As a developer, I want a working TypeScript/Vitest toolchain so future specs can ship quickly.
- As the team, I want the engine work split into small slices so we can iterate on logic and UI together.

## Specific Requirements

**Tooling Setup**
- Keep TypeScript (strict), Vite-friendly module settings, and Vitest config in place.
- Maintain npm scripts for `test`, `test:watch`, and `typecheck`.
- Include `package-lock.json` in version control for deterministic installs.

**Backlog Rescope**
- Use `docs/backlog.md` to drive smaller specs: dice/movement loop → square mechanics → price tracker → win condition → persistence.
- Pair each slice with minimal UI wiring and focused tests.

**Cleanup & Deferral**
- Engine implementation, board data, and price ladder are deferred to new, narrower specs.
- Placeholder files are acceptable to satisfy tooling until new specs add real code.

## Visual Design
No visual assets provided.

## Existing Code to Leverage
None yet; future specs will introduce reusable logic/components.

## Out of Scope
- Any engine/board/price logic implementation in this spec.
- UI beyond minimal placeholders introduced by future slices.
- Online/multiplayer sync and optional forked board paths.
