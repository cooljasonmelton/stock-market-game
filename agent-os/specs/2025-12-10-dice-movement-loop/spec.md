# Specification: Dice + Movement Loop

## Goal
Provide a minimal playable loop: seedable dice rolls, movement on a 48-square loop (0–47 wrap), start-square choice, and a simple UI to visualize positions and logs. No square effects, pricing, or win condition yet.

## User Stories
- As a player, I want to roll dice and see my piece move around the board so I understand turn flow.
- As a host, I want to select the number of players and a seed so we can replay or debug sequences.
- As a team, we want a minimal UI to validate the logic visually before adding square mechanics.

## Specific Requirements

**Board & Movement**
- Board has 48 positions indexed 0–47; movement wraps modulo 48.
- Movement is clockwise by default; include a configurable boolean for direction (counterclockwise supported later, default to clockwise now).

**Dice & RNG**
- Two six-sided dice per roll; sum determines movement distance.
- Support deterministic RNG injection; allow specifying a seed at game start (default to random if none provided).

**Start & Turn Order**
- Players (2–8) choose a starting square on their first move from {0, 12, 24, 36}.
- Turn order is static; initial player is chosen via random/seeded selection or initial high roll (implement one deterministic method).
- One roll per turn; no re-rolls or doubles logic.

**Turn Flow & Logging**
- Turn loop: (if first move, choose start) → roll dice → move → log landed square index (and label if available) → advance turn.
- Emit/record a turn log with dice, from→to position, and landed square.

**UI (minimal)**
- Render the 48-square loop (list/grid) with player markers.
- Controls to select number of players (2–8) and seed (optional) at game start.
- “Roll” button to advance turn; show current player indicator and log updates.
- Keep UI minimal and ready to extend with square effects later.

**Out of Scope**
- Square effects, pricing, stock logic.
- Win condition/endgame.
- Persistence, online play.
