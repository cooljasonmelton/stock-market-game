# Task Breakdown: Board UI Layout

## Overview
Total Tasks: 10

## Task List

### Data & Config

#### Task Group 1: Stock and square metadata
**Dependencies:** None

- [x] 1.0 Define stock-to-color mapping and stock identifiers per the reference board.
- [x] 1.1 Define square metadata (index, label, stock association if any, type) for 48 squares laid out 12 per side with start squares at 0/12/24/36.
- [x] 1.2 Tests: 2-3 checks that mapping exists for all stock squares and indices are unique/ordered.

**Acceptance Criteria:**
- Complete metadata for all 48 squares with consistent stock colors.

### Layout & Styling

#### Task Group 2: Tailwind setup
**Dependencies:** Task Group 1

- [x] 2.0 Install/configure Tailwind in the Vite project.
- [x] 2.1 Add base styles (mobile-first) for typography and layout shells.
- [ ] 2.2 Tests: N/A (visual/manual is fine).

**Acceptance Criteria:**
- Tailwind available; base styles applied without breaking existing UI.

#### Task Group 3: Board rendering
**Dependencies:** Task Groups 1-2

- [x] 3.0 Render 48-square board in a square-ish layout: 12 per side, shared corners, square 0 mid-side; start squares at 0/12/24/36.
- [x] 3.1 Apply labels/colors from metadata; use stock-color mapping for stock squares.
- [ ] 3.2 Responsive: mobile-first layout that remains legible; square-ish on desktop.
- [x] 3.3 Tests: 2-3 RTL checks for square count, start squares, and color class application.

**Acceptance Criteria:**
- Board visually matches reference ordering; colors/labels render correctly; responsive behavior acceptable.

### Player Markers & Controls Integration

#### Task Group 4: Markers and controls
**Dependencies:** Task Group 3

- [x] 4.0 Render player markers on squares with distinct colors per player; support multiple markers per square.
- [x] 4.1 Integrate existing controls (player count, seed, direction, roll) with new board component; preserve log display.
- [ ] 4.2 Optional: highlight current player’s square.
- [x] 4.3 Tests: 2-3 RTL checks for markers rendering and controls still functioning (start, roll, position/log update).

**Acceptance Criteria:**
- Players visible on correct squares; controls unchanged in behavior; logs intact.

### Integration & Review

#### Task Group 5: QA pass
**Dependencies:** Task Groups 1-4

- [ ] 5.0 Manual responsive check (mobile/desktop) for layout and readability.
- [x] 5.1 Run `npm run lint`, `npm run typecheck`, `npm test`.

**Acceptance Criteria:**
- Visual sanity on small and large viewports; all checks/tests pass.
