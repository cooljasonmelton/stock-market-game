export type StockSymbol =
  | "ALCOA"
  | "AMERICAN_MOTORS"
  | "JI_CASE"
  | "GENERAL_MILLS"
  | "INT_SHOE"
  | "MAYTAG"
  | "WESTERN_PUB"
  | "WOOLWORTH";

export type SquareType = "stock" | "event" | "start";

export interface SquareMeta {
  index: number;
  label: string;
  stock?: StockSymbol;
  type: SquareType;
}

export const STOCK_COLORS: Record<StockSymbol, string> = {
  ALCOA: "bg-orange-300",
  AMERICAN_MOTORS: "bg-amber-200",
  JI_CASE: "bg-orange-400",
  GENERAL_MILLS: "bg-cyan-200",
  INT_SHOE: "bg-pink-300",
  MAYTAG: "bg-teal-300",
  WESTERN_PUB: "bg-emerald-300",
  WOOLWORTH: "bg-yellow-300"
};

// 48 squares: start at mid-top (index 0) and go clockwise with 13-per-side perimeter (13x13 grid)
export const BOARD_SQUARES: SquareMeta[] = [
  // Top side (0-11), starting mid-top then clockwise to the right
  { index: 0, label: "START", type: "start" },
  { index: 1, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 2, label: "STOCK DIVIDENDS", type: "event" },
  { index: 3, label: "PAY $100 FEE", type: "event" },
  { index: 4, label: "INT. SHOE", type: "stock", stock: "INT_SHOE" },
  { index: 5, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 6, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 7, label: "WOOLWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 8, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 9, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 10, label: "GEN. MILLS", type: "stock", stock: "GENERAL_MILLS" },
  { index: 11, label: "J.I. CASE", type: "stock", stock: "JI_CASE" },

  // Right side (12-23)
  { index: 12, label: "START", type: "start" },
  { index: 13, label: "SELL ALL", type: "event" },
  { index: 14, label: "DEEP SEA DIVER", type: "event" },
  { index: 15, label: "SELL ALL", type: "event" },
  { index: 16, label: "STOCK DIVIDENDS", type: "event" },
  { index: 17, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 18, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 19, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 20, label: "WOOLWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 21, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 22, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 23, label: "GEN. MILLS", type: "stock", stock: "GENERAL_MILLS" },

  // Bottom side (24-35)
  { index: 24, label: "START", type: "start" },
  { index: 25, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 26, label: "STOCK DIVIDENDS", type: "event" },
  { index: 27, label: "PAY $100 FEE", type: "event" },
  { index: 28, label: "INT. SHOE", type: "stock", stock: "INT_SHOE" },
  { index: 29, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 30, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 31, label: "WOOLWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 32, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 33, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 34, label: "GEN. MILLS", type: "stock", stock: "GENERAL_MILLS" },
  { index: 35, label: "J.I. CASE", type: "stock", stock: "JI_CASE" },

  // Left side (36-47)
  { index: 36, label: "START", type: "start" },
  { index: 37, label: "SELL ALL", type: "event" },
  { index: 38, label: "DOCTOR", type: "event" },
  { index: 39, label: "SELL ALL", type: "event" },
  { index: 40, label: "STOCK DIVIDENDS", type: "event" },
  { index: 41, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 42, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 43, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 44, label: "WOOLWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 45, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 46, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 47, label: "GENERAL MILLS", type: "stock", stock: "GENERAL_MILLS" }
];

// 13x13 grid perimeter positions starting at top-left, then rotated to start at (0,6)
const GRID_SIZE = 13;

function generatePerimeterPositions(size: number) {
  const positions: { row: number; col: number }[] = [];
  // top row
  for (let c = 0; c < size; c++) positions.push({ row: 0, col: c });
  // right col (excluding top)
  for (let r = 1; r < size; r++) positions.push({ row: r, col: size - 1 });
  // bottom row (excluding right)
  for (let c = size - 2; c >= 0; c--) positions.push({ row: size - 1, col: c });
  // left col (excluding bottom and top)
  for (let r = size - 2; r >= 1; r--) positions.push({ row: r, col: 0 });
  return positions;
}

const basePositions = generatePerimeterPositions(GRID_SIZE);
const startIndex = basePositions.findIndex((p) => p.row === 0 && p.col === Math.floor(GRID_SIZE / 2));
const rotated = [...basePositions.slice(startIndex), ...basePositions.slice(0, startIndex)];

export const BOARD_POSITIONS: Record<number, { row: number; col: number }> = BOARD_SQUARES.reduce(
  (acc, square, idx) => {
    acc[square.index] = rotated[idx];
    return acc;
  },
  {} as Record<number, { row: number; col: number }>
);

export const GRID_COLUMNS = GRID_SIZE;
