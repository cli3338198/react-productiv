import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import todos from "./_testData_";

describe("works", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={todos} />);
  });

  it("doesn't fails with not data",function(){

    const {container} = render(<TopTodo />);
    
    expect(container).not.toHaveTextContent("(priority:");
  });

  it("returns highest priority todo", function () {
    const {container} = render(<TopTodo todos={todos} />);
    expect(container).toHaveTextContent("t4");
    expect(container).not.toHaveTextContent("t1")
  });
});
