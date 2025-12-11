# Task Breakdown: Dice + Movement Loop

## Overview
Total Tasks: 10

## Task List

### Engine Core (logic)

#### Task Group 1: Board & RNG
**Dependencies:** None

- [ ] 1.0 Define core types/state for board (48 squares), players (positions, chosenStart), turn/phase, RNG interface.
- [ ] 1.1 Implement seedable RNG (injectable) with default random seed.
- [ ] 1.2 Implement movement helpers: wrap modulo 48; direction boolean (clockwise default).
- [ ] 1.3 Tests: 2-4 focused tests for wrap/direction and RNG determinism.

**Acceptance Criteria:**
- Board indices 0–47 wrap correctly; direction toggle works.
- RNG can be seeded and produces deterministic rolls.

#### Task Group 2: Turn Flow
**Dependencies:** Task Group 1

- [ ] 2.0 Implement game init with selectable player count (2–8), seed, and optional direction.
- [ ] 2.1 Implement initial player selection (random/seeded or deterministic tie-break).
- [ ] 2.2 Turn loop: if first move, require start square choice from {0,12,24,36}; then roll 2d6 → move → log.
- [ ] 2.3 Emit turn log entries (player, dice, from→to, landed index/label).
- [ ] 2.4 Tests: 2-4 focused tests for start selection, turn order advance, and log contents.

**Acceptance Criteria:**
- Start choice required on first move; turn advances in static order.
- Logs capture dice, from→to, landed square.

### UI (minimal)

#### Task Group 3: UI Shell
**Dependencies:** Task Groups 1-2

- [ ] 3.0 Set up a minimal React view (Vite/TS) to render the 48-square loop (list/grid) and player markers.
- [ ] 3.1 Controls: select player count (2–8), seed input (optional), direction toggle (default clockwise).
- [ ] 3.2 Actions: “Start game” initializes state; “Roll” runs one turn, updates positions/log.
- [ ] 3.3 Display current player indicator and log of recent moves.
- [ ] 3.4 Tests: 2-4 RTL tests for roll updates (position/log) and start config wiring.

**Acceptance Criteria:**
- UI shows positions per player and updates on roll.
- Config controls apply to game init; log reflects actions.

### Integration & Review

#### Task Group 4: Integration sanity
**Dependencies:** Task Groups 1-3

- [ ] 4.0 Add 1-3 end-to-end tests covering a seeded multi-turn sequence (logic + UI).
- [ ] 4.1 Verify seeded runs produce consistent positions/logs; wrap behavior correct.

**Acceptance Criteria:**
- Seeded sequence is reproducible and reflected in UI/log.
- Wrap and start-square choice behave as specified.
