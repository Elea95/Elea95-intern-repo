import counterReducer, { increment, decrement, incrementByAmount } from "../features/counterSlice";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 2 }, decrement())).toEqual({ value: 1 });
  });

  it("should handle incrementByAmount", () => {
    expect(counterReducer({ value: 1 }, incrementByAmount(5))).toEqual({ value: 6 });
  });
});
