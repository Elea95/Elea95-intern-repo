import userReducer, { fetchUser } from "../features/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Mock axios
jest.mock("axios");

describe("userSlice async actions", () => {
  it("should handle fetchUser success", async () => {
    const mockUser = { id: 1, name: "John Doe" };
    axios.get.mockResolvedValue({ data: mockUser });

    const store = configureStore({ reducer: userReducer, middleware: [thunk] });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.user).toEqual(mockUser);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  it("should handle fetchUser failure", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    const store = configureStore({ reducer: userReducer, middleware: [thunk] });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.user).toBe(null);
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Failed to fetch user");
  });
});
