# Feature Backlog (rough)

- Dice + Movement Loop (logic + minimal UI)

  - Logic: players roll 2d6, move clockwise on a 50-square board (4 sides × 13 squares, shared corners); track turn order and positions.
  - UI: simple board display with player markers, roll button wired to logic, minimal activity log.
  - Tests: unit tests for movement/turns; a couple of RTL checks for roll → position/log updates.

- Square Mechanics (logic + UI wiring)

  - Logic: square effect types (cash gain/loss, skip/advance, etc.) and state updates; still no stock pricing.
  - UI: surface effect results in the log/board; basic affordances to show applied effects.
  - Tests: representative effect/unit tests; RTL checks for effect display.

- Stock Price Step Tracker (logic + UI wiring)

  - Logic: encode stock price ladder/steps and helpers (lookup, move, clamp); wire square effects that adjust prices.
  - UI: show prices and price changes; reflect adjustments triggered by squares.
  - Tests: ladder movement/clamp tests; UI reflects price changes.

- Win Condition (logic + UI wiring)

  - Logic: define win detection (e.g., cash threshold) and end-of-game lockout.
  - UI: winner banner/lock actions on win.
  - Tests: win detection/unit tests; UI shows winner/lock state.

- Persistence & Resume (later)
  - Local save/load of game state; optional after core loop is solid.

?? SORT INTO BACKLOG

- move to Tailwind or other css library
