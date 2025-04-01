import { addNumbers } from "../utils/calculate";

test("adds two numbers correctly", () => {
  expect(addNumbers(2, 3)).toBe(5);
});
