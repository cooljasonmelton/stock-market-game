# Task Breakdown: Turn-based core engine

## Overview
Total Tasks: 13

## Task List

### Engine Core (TypeScript)

#### Task Group 1: Game State & Board Data
**Dependencies:** None

- [ ] 1.0 Define core types/interfaces (`GameState`, `Player`, `Portfolio`, `BoardSquare`, `PriceLadder`, `TurnResult`, `Action`)
- [ ] 1.1 Encode 1963 board squares with typed identifiers and effect metadata (dividends, splits, pay/collect, sell-all, stockholder meetings, start squares)
- [ ] 1.2 Encode 1963 price ladder per stock with clamping helpers
- [ ] 1.3 Set up deterministic RNG interface (injectable) for dice rolls
- [ ] 1.4 Tests: 2-6 focused tests validating board data integrity and ladder helpers
- [ ] 1.5 Run only the new tests for this group

**Acceptance Criteria:**
- Typed data for board and ladder is complete and matches the 1963 sources.
- Dice RNG can be injected for deterministic runs.
- Tests cover ladder bounds and sample square metadata.

#### Task Group 2: Turn Flow & Actions
**Dependencies:** Task Group 1

- [ ] 2.0 Implement turn phases: optional sell → roll/move → apply effects → optional buy (if permitted)
- [ ] 2.1 Enforce phase validation (no buy before move; buy only on permitted squares)
- [ ] 2.2 Implement movement with two six-sided dice, clockwise traversal, and start-square selection (4 center starts)
- [ ] 2.3 Tests: 2-6 focused tests on phase enforcement, movement, and start selection
- [ ] 2.4 Run only the new tests for this group

**Acceptance Criteria:**
- Turn reducer/function enforces phase ordering and start choice.
- Movement is correct and deterministic with injected RNG.
- Tests confirm invalid/valid action handling and start positions.

#### Task Group 3: Square Effects & Trades
**Dependencies:** Task Groups 1-2

- [ ] 3.0 Implement square effect resolution (dividends, splits, pay/collect, sell-all, stockholder meetings, price moves)
- [ ] 3.1 Implement trade validation and execution (sell validation vs holdings; buy vs cash and square permission)
- [ ] 3.2 Ensure price ladder adjustments are deterministic and clamped
- [ ] 3.3 Emit normalized events for effects and transactions for UI logs
- [ ] 3.4 Tests: 3-8 focused tests covering representative square effects and trade validation
- [ ] 3.5 Run only the new tests for this group

**Acceptance Criteria:**
- Effects match board rules; sell-all enforced where applicable.
- Trades respect cash/holdings and permitted-buy squares.
- Events include price/cash/holding deltas; ladder never over/underflows.

#### Task Group 4: Win Condition & Game Completion
**Dependencies:** Task Groups 2-3

- [ ] 4.0 Implement win detection: first to $100,000 cash after liquidating holdings (require selling to cross threshold)
- [ ] 4.1 Lock further actions once winner is set; emit win event
- [ ] 4.2 Tests: 2-4 focused tests for win detection and lockout
- [ ] 4.3 Run only the new tests for this group

**Acceptance Criteria:**
- Win triggers only when cash ≥ $100,000 and holdings liquidated.
- No further actions accepted after win; winner recorded.

### Integration & Validation

#### Task Group 5: Engine API Surface
**Dependencies:** Task Groups 1-4

- [ ] 5.0 Expose pure functions for state transitions (state + action → new state + events) and helpers for initializing games with/without job phase (job off by default)
- [ ] 5.1 Ensure outputs are UI-agnostic and multiplayer-ready (no React/Zustand coupling)
- [ ] 5.2 Document action/event shapes for consumers
- [ ] 5.3 Tests: 2-4 focused integration tests covering end-to-end turn sequences
- [ ] 5.4 Run only the new tests for this group

**Acceptance Criteria:**
- Public API is typed, deterministic, and side-effect free.
- Initialization supports skipping job phase now and toggling it later.
- Integration tests cover a full turn with effects and validation.

### Test Review & Gaps

#### Task Group 6: Test Gap Analysis
**Dependencies:** Task Groups 1-5

- [ ] 6.0 Review tests from prior groups for coverage of critical flows (start choice, movement, effects, trades, win)
- [ ] 6.1 Add up to 6 additional targeted tests for critical gaps (e2e turn, edge ladder clamp, sell-all path)
- [ ] 6.2 Run only the feature-specific tests (groups 1-6)

**Acceptance Criteria:**
- Critical flows are covered with minimal, focused tests.
- No more than 6 additional tests added; all feature-specific tests pass.

## Execution Order
Recommended sequence: Task Group 1 → 2 → 3 → 4 → 5 → 6.
