# Specification: Board UI Layout

## Goal
Render the 48-square board in a layout matching the original game: square 0 at mid-side, start squares at 0/12/24/36, faithful labels/colors tied to stocks, responsive/mobile-first, with player markers and existing controls intact.

## User Stories
- As a player, I want to see the board laid out like the original so I recognize start positions and square context.
- As a host, I want players and stocks to have consistent colors so it’s easy to track who’s where and which stock a square belongs to.
- As a team, we want a responsive, Tailwind-based layout we can extend later for square mechanics without reworking the board.

## Specific Requirements

**Board Geometry**
- 48 squares indexed 0–47 arranged as 12 per side with shared corners; square 0 at mid-side; start squares at 0, 12, 24, 36.
- Layout should preserve a square-ish shape and adapt to mobile (e.g., stacked rows) and desktop (grid).

**Color/Label Fidelity**
- Faithful labels and colors to match the reference board.
- Create a stock-to-color mapping config and reuse it for any stock-linked squares.
- Non-stock squares should retain their distinct colors as per the reference.

**Player Markers**
- Show player markers on their current squares; distinct color per player.
- Multiple players on the same square should display without overlap issues (e.g., small chips/badges).

**Controls Integration**
- Keep current controls (player count, seed, direction toggle, roll) and wire them to the new layout.
- Preserve the existing turn/log flow; logs should still reflect square indices/labels.

**Responsiveness & Styling**
- Mobile-first design; board remains legible and scrollable if needed on small screens.
- Use Tailwind for layout and theming; keep styling organized and reusable.

**Out of Scope**
- New square mechanics, pricing, win condition, persistence, or multiplayer changes.
- Any changes to game logic beyond rendering/layout and color/label mapping.
