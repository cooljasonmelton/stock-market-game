import React, { useMemo, useState } from "react";
import { Board } from "./components/Board";
import {
  applyChooseStart,
  createGame,
  rollAndMove,
  START_SQUARES,
} from "./game/logic";
import { createSeededRng } from "./game/rng";
import { Direction, GameState } from "./game/types";

function formatLog(entry: { player: string; text: string }) {
  return `${entry.player}: ${entry.text}`;
}

export function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [seedInput, setSeedInput] = useState<string>("");
  const [direction, setDirection] = useState<Direction>("clockwise");
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [logs, setLogs] = useState<{ player: string; text: string }[]>([]);
  const [rng, setRng] = useState(() => createSeededRng());

  const currentPlayer = useMemo(
    () => (gameState ? gameState.players[gameState.currentPlayerIndex] : null),
    [gameState]
  );

  const startGame = () => {
    const parsedSeed = seedInput.trim() === "" ? undefined : Number(seedInput);
    const rngInstance = createSeededRng(
      Number.isNaN(parsedSeed) ? undefined : parsedSeed
    );
    const { state } = createGame({
      playerCount,
      seed: rngInstance.seed,
      direction,
    });
    setGameState(state);
    setRng(rngInstance);
    setLogs([]);
  };

  const chooseStart = (start: number) => {
    if (!gameState || !currentPlayer) return;
    try {
      const updated = applyChooseStart(gameState, currentPlayer.id, start);
      setGameState(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const roll = () => {
    if (!gameState) return;
    const player = gameState.players[gameState.currentPlayerIndex];
    if (!player.hasChosenStart || player.position === null) return;
    const { state: nextState, log } = rollAndMove(gameState, rng);
    setGameState(nextState);
    setLogs((prev) => [
      {
        player: player.name,
        text: `rolled ${log.dice[0]} + ${log.dice[1]} → ${log.to}`,
      },
      ...prev,
    ]);
  };

  const renderStartChoice = () => {
    if (!currentPlayer) return null;
    if (currentPlayer.hasChosenStart) return null;
    return (
      <div className="start-choice">
        <div>Choose start for {currentPlayer.name}:</div>
        <div className="start-buttons">
          {START_SQUARES.map((s) => (
            <button
              key={s}
              onClick={() => chooseStart(s)}
              data-testid={`start-${s}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Dice + Movement Loop</h1>

      <section className="controls">
        <label>
          Players (2-8):
          <input
            type="number"
            min={2}
            max={8}
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
          />
        </label>
        <label>
          Seed (optional):
          <input
            type="text"
            value={seedInput}
            onChange={(e) => setSeedInput(e.target.value)}
            placeholder="random if blank"
          />
        </label>
        <label>
          Direction:
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as Direction)}
          >
            <option value="clockwise">Clockwise</option>
            <option value="counterclockwise">Counterclockwise</option>
          </select>
        </label>
        <button onClick={startGame} data-testid="start-game">
          Start Game
        </button>
      </section>

      {renderStartChoice()}

      {gameState && currentPlayer && (
        <section className="status">
          <div>Current player: {currentPlayer.name}</div>
          <div>Turn: {gameState.turnNumber}</div>
          <button
            onClick={roll}
            disabled={!currentPlayer.hasChosenStart}
            data-testid="roll"
          >
            Roll
          </button>
        </section>
      )}

      {gameState && (
        <div className="board-container" style={{ maxHeight: "70vh" }}>
          <Board
            state={gameState}
            currentPlayerId={
              gameState.players[gameState.currentPlayerIndex]?.id
            }
          />
        </div>
      )}

      <section className="log">
        <h3>Log</h3>
        <ul>
          {logs.map((entry, idx) => (
            <li key={idx}>{formatLog(entry)}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
