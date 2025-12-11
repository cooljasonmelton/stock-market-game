# Spec Requirements: dice-movement-loop

## Initial Description
Basic game loop with dice rolling and movement on a 50-square board (13 squares per side, shared corners). No square mechanics, pricing, or win condition yet. (Correction: 48 total squares; positions 0–47, wrap to 0.)

## Requirements Discussion

### First Round Questions

**Q1:** I assume two six-sided dice, move clockwise, with player positions tracked as 0–49 on the 50-square loop; correct?  
**Answer:** Yes to two six-sided dice and clockwise, but board is 48 squares (0–47) with wrap to 0. Later squares can change direction; add a boolean for clockwise/counterclockwise (hardcode for now).

**Q2:** Do you want a fixed starting square for all players (e.g., index 0), or allow choosing one of four side-centers like the board has?  
**Answer:** Allow choosing start square on first move; options are centers of each side: 0, 12, 24, 36.

**Q3:** Should turn order be static (e.g., players array order) with a simple “end turn” to advance, or include re-rolls on doubles?  
**Answer:** Turn order is static, one roll per turn, players 2–8. Add a mechanic to pick starting player at random (or initial high-roll).

**Q4:** For this slice, should squares have no effects at all (pure movement), or should we at least log the square index/label landed on for the UI to display?  
**Answer:** Log the square for now to reuse when square behavior is added.

**Q5:** Do you want deterministic RNG injection (seedable) for tests and replay, or is `Math.random` fine for now?  
**Answer:** Use deterministic RNG injection; allow selecting a seed (default random) before starting a game. Also allow selecting number of players.

**Q6:** Any UI expectations for this slice (e.g., minimal board render + roll button + activity log), or purely logic with tests?  
**Answer:** Add a simple UI to show player positions as they move around the board and visually test logic.

**Existing Code Reuse:** Are there existing features in your codebase with similar patterns we should reference?  
**Answer:** None provided.

### Existing Code to Reference
No similar existing features identified for reference.

### Follow-up Questions
None.

## Visual Assets

### Files Provided:
No visual assets provided. (Checked `agent-os/specs/2025-12-10-dice-movement-loop/planning/visuals/`)

## Requirements Summary

### Functional Requirements
- Two six-sided dice; movement defaults to clockwise with a configurable boolean for direction; board is 48 squares (0–47) and wraps.
- Start square choice on first move from {0, 12, 24, 36}.
- Turn order static (2–8 players). Pick initial player via random/seeded selection or initial high roll; then one roll per turn.
- Log landed square index (and label if present) for future square behavior.
- Seedable RNG (injectable); allow selecting seed and number of players at game start.
- Provide a simple UI to visualize positions and moves; include roll button and basic log.

### Reusability Opportunities
- None identified yet; future slices can build on this loop.

### Scope Boundaries
**In Scope:**
- Dice rolling, movement with wrap, direction toggle (even if fixed), start-square choice, turn order selection, logging, minimal UI.

**Out of Scope:**
- Square effects, pricing, win condition, persistence, online play.

**Future Enhancements Mentioned:**
- Direction changes triggered by squares; square mechanics; stock price tracker; win condition; persistence.

### Technical Considerations
- Deterministic RNG injection for tests and seed selection.
- Board indices fixed at 0–47; movement wraps modulo 48.
- UI should stay minimal and decoupled enough to extend with square effects later.
