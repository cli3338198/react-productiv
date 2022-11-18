import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { todos } from "./_testData_";

describe("works", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={todos} />);
  });

  it("returns highest priority todo", function () {
    const result = render(<TopTodo todos={todos} />);
    // test get the #1 todo
  });
});
