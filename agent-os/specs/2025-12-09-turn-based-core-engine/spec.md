# Specification: Turn-based core engine

## Goal
Deliver a pure TypeScript turn engine that mirrors the 1963 Stock Market board: deterministic turn flow, board movement, square effects, price ladder adjustments, and win detection, ready for hot-seat play and future UI/multiplayer.

## User Stories
- As a host running game night, I want automated turns and board effects so play is fast and dispute-free.
- As a player, I want to buy/sell at the right times with accurate prices so I can focus on strategy.
- As a group, we want a clear win condition so the game ends decisively when someone reaches $100,000.

## Specific Requirements

**Setup & Start**
- Skip pre-game “job” mechanic; each player starts with $1,000 cash, no holdings.
- Players choose one of four center start squares (one per side) before first roll.
- Use two six-sided dice; move clockwise.
- Represent setup choices/config as part of state to allow adding the job phase later.

**Turn Flow**
- Sequence: optional sell → roll/move → apply landed square effect(s) → if square permits, optional buy → end turn.
- Enforce valid actions per phase; reject buys before movement and buys on non-permitted squares.
- Expose turn result events (dice, movement, effects, transactions) for UI log.

**Board Model**
- Encode all 1963 board squares with typed identifiers and rule definitions (dividends, splits, penalties, bonuses, stockholder meetings, pay/collect, “sell all”, etc.).
- Support four start squares and clockwise traversal; handle passing/landing behaviors per square definitions.
- Keep board data UI-agnostic for reuse across platforms.

**Price Ladder**
- Encode the provided 1963 ladder per stock as canonical data; clamp at bounds.
- Provide helpers for price up/down steps, dividends, splits, and price lookups by stock/tier.
- Ensure ladder adjustments are deterministic and validated (no negative/overflow values).

**Trade & Cash Validation**
- Validate sells against holdings; validate buys against available cash and square permissions.
- Update cash/holdings atomically with price lookups from the ladder; include transaction summaries in turn results.
- Allow “sell all” enforcement when triggered by board squares.

**Square Effects Execution**
- Apply square rules deterministically (dividends, splits, pay/collect amounts, go-to/skip effects if present).
- Emit normalized effect results for UI (type, stock, delta cash, delta holdings, price moves).
- Support sequences when a square triggers multiple effects (e.g., price move plus dividend).

**Win Condition**
- Detect win when a player reaches $100,000 cash after liquidating holdings; require selling holdings to cross the threshold.
- Expose win event and lock further actions once a winner is set.

**State & Purity**
- Core engine exposed as pure functions over immutable state (state + action → new state + events).
- Include schema/types for `GameState`, `Player`, `Portfolio`, `BoardSquare`, `PriceLadder`, `TurnResult`.
- Provide deterministic random support (injectable RNG) to ease testing.

**Config & Extensibility**
- Gate the job mechanic as a future flag; default off in MVP.
- Structure rules/data so online multiplayer can share the same engine without React/Zustand coupling.

## Visual Design
No visual assets provided.

## Existing Code to Leverage
No existing reusable code identified in this repo; engine to be built fresh but structured for reuse by future UI and multiplayer layers.

## Out of Scope
- Pre-game “job” mechanic to reach $1,000 starting cash (deferred flag).
- Any UI implementation; this spec covers engine only.
- Online/multiplayer sync and networking.
- Alternative rule variants beyond the 1963 board and provided price ladder.
