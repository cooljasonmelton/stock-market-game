import React from "react";
import { GameState } from "../game/types";
import { BOARD_SIZE } from "../game/logic";

interface BoardProps {
  state: GameState;
}

export function Board({ state }: BoardProps) {
  const tiles = Array.from({ length: BOARD_SIZE }, (_, idx) => idx);
  const playersByPos = state.players.reduce<Record<number, string[]>>((acc, p) => {
    if (p.position !== null) {
      acc[p.position] = acc[p.position] || [];
      acc[p.position].push(p.name);
    }
    return acc;
  }, {});

  return (
    <div className="board-grid">
      {tiles.map((idx) => (
        <div key={idx} className="tile">
          <div className="tile-label">#{idx}</div>
          {playersByPos[idx]?.length ? (
            <div className="markers">
              {playersByPos[idx].map((name) => (
                <span key={name} className="marker">
                  {name[0]}
                </span>
              ))}
            </div>
          ) : (
            <div className="markers empty" />
          )}
        </div>
      ))}
    </div>
  );
}
