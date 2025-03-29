import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../store/counterSlice";

export default function StatusMessage() {
  const count = useSelector(selectCounterValue);

  let message;
  if (count < 0) {
    message = "Negative numbers? Be careful!";
  } else if (count === 0) {
    message = "Counter is at zero.";
  } else if (count > 0 && count <= 5) {
    message = "Good start!";
  } else {
    message = "You're counting high!";
  }

  return <h2 className="text-lg font-medium text-gray-700">{message}</h2>;
}
