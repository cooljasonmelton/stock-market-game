import { describe, expect, it } from "vitest";
import {
  applyChooseStart,
  BOARD_SIZE,
  createGame,
  movePosition,
  rollAndMove,
  START_SQUARES
} from "../src/game/logic";
import { createSeededRng } from "../src/game/rng";

describe("board movement", () => {
  it("wraps around 48 squares clockwise", () => {
    const pos = BOARD_SIZE - 2; // 46
    const next = movePosition(pos, 4, "clockwise");
    expect(next).toBe((pos + 4) % BOARD_SIZE);
  });

  it("wraps around counterclockwise", () => {
    const pos = 1;
    const next = movePosition(pos, 3, "counterclockwise");
    expect(next).toBe(BOARD_SIZE - 2);
  });
});

describe("rng determinism", () => {
  it("produces deterministic sequence for same seed", () => {
    const r1 = createSeededRng(42);
    const r2 = createSeededRng(42);
    const seq1 = [r1.nextInt(1, 6), r1.nextInt(1, 6), r1.nextInt(1, 6)];
    const seq2 = [r2.nextInt(1, 6), r2.nextInt(1, 6), r2.nextInt(1, 6)];
    expect(seq1).toEqual(seq2);
  });
});

describe("turn flow", () => {
  it("requires start selection on first move and advances turn", () => {
    const { state, rng } = createGame({ playerCount: 2, seed: 1 });
    const started = applyChooseStart(state, state.players[state.currentPlayerIndex].id, START_SQUARES[0]);

    const { state: afterRoll, log } = rollAndMove(started, rng);
    expect(log.from).toBe(START_SQUARES[0]);
    expect(afterRoll.currentPlayerIndex).toBe(1);
    expect(afterRoll.turnNumber).toBe(2);
    expect(afterRoll.logs).toHaveLength(1);
  });

  it("throws if start not chosen", () => {
    const { state, rng } = createGame({ playerCount: 2, seed: 1 });
    expect(() => rollAndMove(state, rng)).toThrow();
  });
});
