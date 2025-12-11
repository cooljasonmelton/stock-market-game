# Spec Requirements: board-ui-layout

## Initial Description
Create a UI spec to arrange the current 48 squares into a board layout matching the provided images, with square 0 at the middle of a side so all start squares are centered on each side.

## Requirements Discussion

### First Round Questions

**Q1:** I assume we keep 48 squares indexed 0–47 and lay them in a loop matching the board image: 12 tiles per side with shared corners, square 0 at the middle of one side, and start squares at the midpoints (0, 12, 24, 36). Correct?  
**Answer:** Yes.

**Q2:** For this slice, do we need faithful labeling/coloring to match the image, or just positions/indices for now (with simple styling)?  
**Answer:** Faithful coloring and labeling. Colors map to specific stocks; create a config/reusable logic to color each stock consistently.

**Q3:** Should we include player markers and current positions in this layout, or focus solely on board rendering?  
**Answer:** Include player markers; each player gets a different color piece.

**Q4:** Do you want the UI to be responsive (desktop + mobile) and keep the board square-ish, or is desktop-only acceptable for this slice?  
**Answer:** Yes, make it mobile-first/responsive.

**Q5:** Should we preserve your current controls (player count, seed, direction, roll) and just change the board layout, or also add quick navigation (e.g., highlight next move landing)?  
**Answer:** Preserve current controls for now.

**Q6:** Any specific tech constraints beyond the existing stack (React + Vite + TS + Tailwind or basic CSS)? Use existing minimal CSS or switch to Tailwind now?  
**Answer:** Use Tailwind now.

**Existing Code Reuse:** Are there existing features in your codebase with similar patterns we should reference?  
**Answer:** None provided.

### Existing Code to Reference
No similar existing features identified for reference.

### Follow-up Questions
None.

## Visual Assets

### Files Provided:
No visual assets provided. (Checked `agent-os/specs/2025-12-11-board-ui-layout/planning/visuals/`)

## Requirements Summary

### Functional Requirements
- Board layout: 48 squares (0–47) arranged 12 per side with shared corners; square 0 at middle of a side; start squares at 0, 12, 24, 36.
- Labels/colors are placeholder for now; a follow-up spec will transcribe exact outer-ring labels/colors from the reference board. Stock-color mapping is provisional.
- Player markers rendered on squares; distinct colors per player.
- Preserve existing controls (player count, seed, direction toggle, roll) integrated with the new layout.
- Responsive/mobile-first layout; board remains square-ish and usable on small screens.

### Reusability Opportunities
- Stock color/label config reusable for future square mechanics and pricing.

### Scope Boundaries
**In Scope:**
- Layout, styling, placeholder labels/colors, player markers, and preserving current controls.
- Tailwind adoption for this UI slice.

**Out of Scope:**
- Accurate label/color transcription (deferred to next spec); new square mechanics, pricing, win condition, persistence, or multiplayer changes.

**Future Enhancements Mentioned:**
- Use stock color mapping for mechanics/pricing in later slices.

### Technical Considerations
- Use Tailwind for layout/styling; keep board square-like and responsive.
- Data-driven stock-to-color mapping; reuse for all stock-affiliated squares.
- Integrate with existing logic controls (player count/seed/direction/roll) without changing flow.
