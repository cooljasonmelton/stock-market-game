export type Direction = "clockwise" | "counterclockwise";

export interface PlayerState {
  id: string;
  name: string;
  position: number | null;
  hasChosenStart: boolean;
}

export interface TurnLogEntry {
  turn: number;
  playerId: string;
  dice: [number, number];
  from: number;
  to: number;
  landed: number;
}

export interface GameState {
  players: PlayerState[];
  currentPlayerIndex: number;
  turnNumber: number;
  direction: Direction;
  logs: TurnLogEntry[];
}

export interface Rng {
  nextInt: (minInclusive: number, maxInclusive: number) => number;
  seed: number;
}

export interface InitOptions {
  playerCount: number;
  playerNames?: string[];
  seed?: number;
  direction?: Direction;
}
