import { Rng } from "./types";

export function createSeededRng(seed?: number): Rng {
  let state = seed ?? Math.floor(Math.random() * 0xffffffff);
  const lcg = () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state;
  };
  return {
    seed: state,
    nextInt: (minInclusive: number, maxInclusive: number) => {
      const rand = lcg();
      const range = maxInclusive - minInclusive + 1;
      return minInclusive + (rand % range);
    }
  };
}

export const randomRng = () => createSeededRng();
