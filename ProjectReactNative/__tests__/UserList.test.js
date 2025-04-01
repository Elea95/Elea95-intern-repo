import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";  // FIX: Ensure `toBeInTheDocument()` works
import axios from "axios";
import UserList from "../UserList"; // Adjust path as needed

jest.mock("axios"); // Mock axios module

test("fetches and displays user data", async () => {
  const mockUsers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  axios.get.mockResolvedValue({ data: mockUsers }); // Mock API response

  render(<UserList />);

  // FIX: Use waitFor() inside an async function to wait for state updates
  await waitFor(() => {
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});

test("handles API error", async () => {
  axios.get.mockRejectedValue(new Error("Network Error"));

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText("Error fetching users")).toBeInTheDocument();
  });
});
