import React from "react";
import { GameState } from "../game/types";
import { BOARD_SQUARES, STOCK_COLORS } from "../game/boardMetadata";

interface BoardProps {
  state: GameState;
}

export function Board({ state }: BoardProps) {
  const playersByPos = state.players.reduce<Record<number, string[]>>((acc, p) => {
    if (p.position !== null) {
      acc[p.position] = acc[p.position] || [];
      acc[p.position].push(p.name);
    }
    return acc;
  }, {});

  const boardTiles = BOARD_SQUARES;

  return (
    <div className="board-grid">
      {boardTiles.map((square) => (
        <div
          key={square.index}
          className={`tile ${square.stock ? STOCK_COLORS[square.stock] : "bg-white"}`}
          data-testid={`square-${square.index}`}
        >
          <div className="tile-label">
            #{square.index} — {square.label}
          </div>
          {playersByPos[square.index]?.length ? (
            <div className="markers">
              {playersByPos[square.index].map((name) => {
                const hue = (name.charCodeAt(0) * 37) % 360;
                return (
                  <span
                    key={name}
                    className="marker"
                    style={{ backgroundColor: `hsl(${hue}, 70%, 45%)` }}
                    title={name}
                  >
                    {name[0]}
                  </span>
                );
              })}
            </div>
          ) : (
            <div className="markers empty" />
          )}
        </div>
      ))}
    </div>
  );
}
