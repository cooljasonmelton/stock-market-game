import { describe, expect, it } from "vitest";
import { BOARD_POSITIONS, BOARD_SQUARES, GRID_COLUMNS, STOCK_COLORS } from "../src/game/boardMetadata";

describe("board metadata", () => {
  it("has 48 unique squares with correct start positions", () => {
    expect(BOARD_SQUARES).toHaveLength(48);
    const indices = BOARD_SQUARES.map((s) => s.index);
    expect(new Set(indices).size).toBe(48);
    const starts = [0, 12, 24, 36];
    starts.forEach((s) => expect(indices).toContain(s));
  });

  it("has positions for every square and uses a 13x13 perimeter", () => {
    expect(Object.keys(BOARD_POSITIONS)).toHaveLength(48);
    Object.values(BOARD_POSITIONS).forEach((pos) => {
      expect(pos.row).toBeGreaterThanOrEqual(0);
      expect(pos.col).toBeGreaterThanOrEqual(0);
      expect(pos.row).toBeLessThan(GRID_COLUMNS);
      expect(pos.col).toBeLessThan(GRID_COLUMNS);
    });
  });

  it("has colors for all stock squares", () => {
    const stockSquares = BOARD_SQUARES.filter((s) => s.stock);
    stockSquares.forEach((sq) => {
      expect(sq.stock).toBeTruthy();
      if (sq.stock) {
        expect(STOCK_COLORS[sq.stock]).toBeTruthy();
      }
    });
  });
});
