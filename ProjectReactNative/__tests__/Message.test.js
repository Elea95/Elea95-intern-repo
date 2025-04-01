import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "../components/Message";

test("updates message when button is clicked", () => {
  render(<Message />);
  const button = screen.getByText("Click Me");
  fireEvent.click(button);
  expect(screen.getByText("You clicked the button!")).toBeInTheDocument();
});
