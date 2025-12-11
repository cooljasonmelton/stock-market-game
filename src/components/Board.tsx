import React from "react";
import { GameState } from "../game/types";
import { BOARD_POSITIONS, BOARD_SQUARES, GRID_COLUMNS, STOCK_COLORS } from "../game/boardMetadata";

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
    <div
      className="board-grid"
      style={{ gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(16px, 1fr))` }}
      data-testid="board-grid"
    >
      {boardTiles.map((square) => {
        const pos = BOARD_POSITIONS[square.index];
        return (
          <div
            key={square.index}
            className={`tile ${square.stock ? STOCK_COLORS[square.stock] : "bg-white"}`}
            data-testid={`square-${square.index}`}
            style={{ gridColumnStart: pos.col + 1, gridRowStart: pos.row + 1 }}
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
        );
      })}
    </div>
  );
}
