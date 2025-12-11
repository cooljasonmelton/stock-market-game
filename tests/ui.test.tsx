import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { App } from "../src/App";

describe("App UI", () => {
  it("starts a game and moves a player with a roll", async () => {
    render(<App />);

    const user = userEvent.setup();

    // Configure players and seed
    const seedInput = screen.getByPlaceholderText("random if blank");
    await user.clear(seedInput);
    await user.type(seedInput, "1");

    fireEvent.click(screen.getByTestId("start-game"));

    // Choose start for current player
    fireEvent.click(screen.getByTestId("start-0"));

    // Roll once
    await user.click(screen.getByTestId("roll"));

    // Log should show an entry
    const logItems = await screen.findAllByRole("listitem");
    expect(logItems.length).toBeGreaterThan(0);
  });
});
