import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { App } from "../src/App";

describe("App UI", () => {
  it("starts a game and moves a player with a roll", async () => {
    render(<App />);

    const user = userEvent.setup();

    // Configure players and seed
    const seedInput = await screen.findByPlaceholderText("random if blank");
    await user.clear(seedInput);
    await user.type(seedInput, "1");

    await user.click(screen.getByTestId("start-game"));

    // Choose start for current player
    await user.click(screen.getByTestId("start-0"));

    // Roll once
    await user.click(screen.getByTestId("roll"));

    // Log should show an entry
    const logItems = await screen.findAllByRole("listitem");
    expect(logItems.length).toBeGreaterThan(0);
  });

  it("plays a seeded multi-turn sequence deterministically", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Use a fixed seed
    const seedInput = await screen.findByPlaceholderText("random if blank");
    await user.clear(seedInput);
    await user.type(seedInput, "123");
    await user.click(screen.getByTestId("start-game"));

    // Choose start for player 1
    await user.click(screen.getByTestId("start-0"));
    // Roll for player 1
    await user.click(screen.getByTestId("roll"));
    // Choose start for player 2 when prompted
    const start12 = await screen.findByTestId("start-12");
    await user.click(start12);
    // Roll for player 2
    await user.click(screen.getByTestId("roll"));
    // Back to player 1 (already has start) — roll again
    await user.click(screen.getByTestId("roll"));

    const logItems = screen.getAllByRole("listitem");
    expect(logItems.length).toBeGreaterThanOrEqual(3);
  });
});
