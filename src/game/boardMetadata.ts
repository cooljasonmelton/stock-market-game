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
  ALCOA: "bg-lime-300",
  AMERICAN_MOTORS: "bg-amber-200",
  JI_CASE: "bg-orange-300",
  GENERAL_MILLS: "bg-cyan-200",
  INT_SHOE: "bg-rose-300",
  MAYTAG: "bg-teal-300",
  WESTERN_PUB: "bg-emerald-300",
  WOOLWORTH: "bg-yellow-300"
};

// Order: start at mid-top (index 0), go clockwise
export const BOARD_SQUARES: SquareMeta[] = [
  { index: 0, label: "START", type: "start" },
  { index: 1, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 2, label: "STOCK DIVIDENDS", type: "event" },
  { index: 3, label: "START", type: "start" },
  { index: 4, label: "PAY $100 FEE", type: "event" },
  { index: 5, label: "J.I. CASE", type: "stock", stock: "JI_CASE" },
  { index: 6, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 7, label: "GEN. MILLS", type: "stock", stock: "GENERAL_MILLS" },
  { index: 8, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 9, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 10, label: "WOODWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 11, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },

  { index: 12, label: "START", type: "start" },
  { index: 13, label: "SELL ALL", type: "event" },
  { index: 14, label: "DOCTOR", type: "event" },
  { index: 15, label: "SELL ALL", type: "event" },
  { index: 16, label: "STOCK DIVIDENDS", type: "event" },
  { index: 17, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 18, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 19, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 20, label: "WOODWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 21, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 22, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 23, label: "GENERAL MILLS", type: "stock", stock: "GENERAL_MILLS" },

  { index: 24, label: "START", type: "start" },
  { index: 25, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 26, label: "STOCK DIVIDENDS", type: "event" },
  { index: 27, label: "START", type: "start" },
  { index: 28, label: "PAY $100 FEE", type: "event" },
  { index: 29, label: "J.I. CASE", type: "stock", stock: "JI_CASE" },
  { index: 30, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 31, label: "GEN. MILLS", type: "stock", stock: "GENERAL_MILLS" },
  { index: 32, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 33, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 34, label: "WOODWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 35, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },

  { index: 36, label: "START", type: "start" },
  { index: 37, label: "SELL ALL", type: "event" },
  { index: 38, label: "DEEP SEA DIVER", type: "event" },
  { index: 39, label: "SELL ALL", type: "event" },
  { index: 40, label: "STOCK DIVIDENDS", type: "event" },
  { index: 41, label: "STOCKHOLDERS MEETING", type: "event" },
  { index: 42, label: "AM. MOTORS", type: "stock", stock: "AMERICAN_MOTORS" },
  { index: 43, label: "ALCOA", type: "stock", stock: "ALCOA" },
  { index: 44, label: "WOODWORTH", type: "stock", stock: "WOOLWORTH" },
  { index: 45, label: "WESTERN PUBL.", type: "stock", stock: "WESTERN_PUB" },
  { index: 46, label: "MAYTAG", type: "stock", stock: "MAYTAG" },
  { index: 47, label: "GENERAL MILLS", type: "stock", stock: "GENERAL_MILLS" }
];
