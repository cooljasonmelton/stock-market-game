import { createSeededRng } from "./rng";
import { Direction, GameState, InitOptions, Rng, TurnLogEntry } from "./types";

export const BOARD_SIZE = 48;
export const START_SQUARES = [0, 12, 24, 36];

export function createInitialPlayers(count: number, names?: string[]) {
  const players = Array.from({ length: count }).map((_, idx) => ({
    id: `p${idx + 1}`,
    name: names?.[idx] ?? `Player ${idx + 1}`,
    position: null,
    hasChosenStart: false
  }));
  return players;
}

export function chooseStartingPlayer(rng: Rng, playerCount: number) {
  return rng.nextInt(0, playerCount - 1);
}

export function createGame(options: InitOptions) {
  if (options.playerCount < 2 || options.playerCount > 8) {
    throw new Error("Player count must be between 2 and 8");
  }
  const rng = createSeededRng(options.seed);
  const players = createInitialPlayers(options.playerCount, options.playerNames);
  const direction: Direction = options.direction ?? "clockwise";
  const currentPlayerIndex = chooseStartingPlayer(rng, options.playerCount);
  const state: GameState = {
    players,
    currentPlayerIndex,
    turnNumber: 1,
    direction,
    logs: []
  };
  return { state, rng };
}

export function movePosition(position: number, steps: number, direction: Direction) {
  const delta = direction === "clockwise" ? steps : -steps;
  const next = (position + delta) % BOARD_SIZE;
  return (next + BOARD_SIZE) % BOARD_SIZE;
}

export function applyChooseStart(state: GameState, playerId: string, start: number): GameState {
  if (!START_SQUARES.includes(start)) throw new Error("Invalid start square");
  const player = state.players[state.currentPlayerIndex];
  if (player.id !== playerId) throw new Error("Not this player's turn");
  if (player.hasChosenStart) throw new Error("Start already chosen");

  const nextState: GameState = {
    ...state,
    players: state.players.map((p) =>
      p.id === playerId ? { ...p, position: start, hasChosenStart: true } : p
    )
  };
  return nextState;
}

export function rollAndMove(state: GameState, rng: Rng): { state: GameState; log: TurnLogEntry } {
  const player = state.players[state.currentPlayerIndex];
  if (!player.hasChosenStart || player.position === null) {
    throw new Error("Player must choose a starting square first");
  }
  const die1 = rng.nextInt(1, 6);
  const die2 = rng.nextInt(1, 6);
  const total = die1 + die2;
  const from = player.position;
  const to = movePosition(from, total, state.direction);

  const updatedPlayers = state.players.map((p) =>
    p.id === player.id ? { ...p, position: to } : p
  );
  const log: TurnLogEntry = {
    turn: state.turnNumber,
    playerId: player.id,
    dice: [die1, die2],
    from,
    to,
    landed: to
  };
  const nextPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  const nextState: GameState = {
    ...state,
    players: updatedPlayers,
    currentPlayerIndex: nextPlayerIndex,
    turnNumber: state.turnNumber + 1,
    logs: [...state.logs, log]
  };
  return { state: nextState, log };
}
