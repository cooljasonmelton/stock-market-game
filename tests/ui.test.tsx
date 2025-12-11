import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { App } from "../src/App";

describe("Board UI Layout", () => {
  it("renders 48 squares with start positions", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId("start-game"));
    await user.click(await screen.findByTestId("start-0"));
    const squares = await screen.findAllByTestId(/square-/);
    expect(squares).toHaveLength(48);
    [0, 12, 24, 36].forEach((idx) => {
      expect(screen.getByTestId(`square-${idx}`)).toBeInTheDocument();
    });
  });

  it("supports starting a game and rolling once", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Use default controls; start game
    await user.click(screen.getByTestId("start-game"));
    // Choose a start square
    await user.click(screen.getByTestId("start-0"));
    // Roll once
    await user.click(screen.getByTestId("roll"));

    const logItems = await screen.findAllByRole("listitem");
    expect(logItems.length).toBeGreaterThan(0);
  });
});
