import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import userReducer, { fetchUser } from "../features/userSlice";

jest.mock("axios");

describe("userSlice async actions", () => {
  it("should handle fetchUser success", async () => {
    const mockUser = { id: 1, name: "John Doe" };
    axios.get.mockResolvedValue({ data: mockUser });

    const store = configureStore({
      reducer: userReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.user).toEqual(mockUser);
  });

  it("should handle fetchUser failure", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    const store = configureStore({
      reducer: userReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

    await store.dispatch(fetchUser());

    const state = store.getState();
    expect(state.error).toEqual("Network Error");
  });
});
