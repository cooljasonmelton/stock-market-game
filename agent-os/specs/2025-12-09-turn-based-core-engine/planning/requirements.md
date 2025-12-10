# Spec Requirements: turn-based core engine

## Initial Description
Turn-based core engine — Pure TypeScript rules for players, dice, board movement, square effects (dividends, splits, penalties), win conditions, and validations keyed to the 1963 price ladder.

## Requirements Discussion

### First Round Questions

**Q1:** I assume turns use two six-sided dice with players starting at “START” and moving clockwise; correct, or do you want a different dice/starting rule?  
**Answer:** Mostly correct. There is a pre-game “job” mechanic where players earn $1,000 before picking one of four start squares, but for MVP we skip the job phase and let players choose one of the four center-start squares and roll to begin.

**Q2:** Should we mirror the original starting bankroll/share setup (e.g., equal cash, no initial holdings), or do you prefer configurable starting cash/holdings for the engine?  
**Answer:** For MVP, each player starts with $1,000; no job mechanic yet.

**Q3:** For the turn loop, is the flow “roll → move → apply square effect → optionally buy/sell before ending turn,” or should buying/selling be allowed both before and after movement?  
**Answer:** Turn loop is “option to sell shares → move → apply square effects → if square permits, option to buy.”

**Q4:** For price ladder fidelity, can we treat the provided photo as ground truth and encode those exact price steps per stock (with clamping at the ends), or do you have a text transcription you want used instead?  
**Answer:** Yes, use those price steps per stock.

**Q5:** What’s the win condition you want encoded: first to a target net worth, highest net worth after a set number of laps/turns, or follow the original rulebook if different?  
**Answer:** First to $100,000; players must liquidate holdings to reach $100,000 in cash.

**Q6:** Any rules or square effects you want excluded or simplified in the core engine (e.g., skipping certain penalties/bonuses), or should everything on the 1963 board be implemented as-is?  
**Answer:** Implement everything on the board; not too complicated.

**Existing Code Reuse:** Are there existing features in your codebase with similar patterns we should reference?  
**Answer:** No similar features identified.

### Existing Code to Reference
No similar existing features identified for reference.

### Follow-up Questions
No follow-up questions asked.

## Visual Assets

### Files Provided:
No visual assets provided. (Checked `agent-os/specs/2025-12-09-turn-based-core-engine/planning/visuals/`)

## Requirements Summary

### Functional Requirements
- Turn engine in pure TypeScript: player turn order, dice roll (2d6), clockwise movement, square effect resolution, and validation of actions.
- Start flow: skip pre-game job mechanic; players choose one of four center start squares and begin with $1,000 cash, no holdings.
- Turn loop: optional sell before movement → move → apply landed square effects → if square permits, optional buy.
- Board fidelity: implement all 1963 board squares (dividends, splits, penalties, bonuses, stockholder meetings, etc.) as-is.
- Price ladder: encode the provided 1963 ladder per stock, with clamping at bounds; square effects adjust prices using this ladder.
- Win condition: first player to reach $100,000 cash after liquidating holdings (must sell to achieve cash threshold).

### Reusability Opportunities
- None identified yet; engine to be modular for reuse by UI and future multiplayer.

### Scope Boundaries
**In Scope:**
- Core turn-based rules engine and price ladder logic.
- Complete square effects and validations for hot-seat play.

**Out of Scope:**
- Pre-game “job” mechanic to reach $1,000 (deferred).
- Online/multiplayer sync; any non-board-rule variants.
- UI specifics beyond what the engine exposes.

**Future Enhancements Mentioned:**
- Add the job mechanic phase.
- Online multiplayer (Supabase) in later phase.

### Technical Considerations
- Pure TypeScript functions decoupled from UI; consumable by React and future targets.
- Deterministic state transitions for testing; validate balances/holdings before actions.
- Use the encoded 1963 price ladder as canonical data; clamp at edges.
- Support for start-square choice (four center starts) and skipping job phase as configuration to enable later.***
