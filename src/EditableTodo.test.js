import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("works", function () {
  it("renders without crashing", function () {
    render(<EditableTodo />);
  });

  it("", function () {
    const result = render(<EditableTodo />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });
});
