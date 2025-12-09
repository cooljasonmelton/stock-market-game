# Product Roadmap

1. [ ] Turn-based core engine — Pure TypeScript rules for players, dice, board movement, square effects (dividends, splits, penalties), win conditions, and validations keyed to the 1963 price ladder. `M`
2. [ ] Price ladder + market state — Encode the authentic 1963 ladder, enforce bounds, and expose helpers for price up/down, dividends, and splits that the engine and UI consume. `S`
3. [ ] Persistent hot-seat state — Auto-save/load full game state to localStorage on every action, including players, positions, cash/holdings, and market prices, with integrity checks. `S`
4. [ ] Interactive board UI — Render the board with tiles, player positions, and landing highlights; trigger the correct square effect and show the resulting rule application inline. `S`
5. [ ] Turn flow & actions UI — Current-player banner, dice roll interaction, action log, and modal flows for buying/selling shares with balance checks and updated holdings. `S`
6. [ ] Portfolio and market dashboard — Live view of cash, holdings, and current prices from the ladder; quick-buy/sell affordances and per-stock price history for the session. `S`
7. [ ] Rule helper overlays — Tap/click any square to see its rule text and linked ladder prices; inline tooltips for dividends/splits to minimize rule lookups during play. `XS`
8. [ ] Join-code online play (v2) — Supabase-backed room creation/join with 6-digit codes, shared game state sync, and turn-order enforcement to mirror local play remotely. `L`

> Notes
> - Order follows engine and data dependencies first, then UI and persistence, with online play as a later phase.
> - Each item delivers an end-to-end feature (logic + UI) that is testable in isolation.
