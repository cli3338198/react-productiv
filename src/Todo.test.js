import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo.js"
import todos from "./_testData_.js"

describe("renders a single todo", function () {
  it("renders without crashing", function () {
    render(<Todo {...todos[0]} />);
  });

  it("matches snapshot", function(){
    const {container} = render(<Todo {...todos[0]} />);
    expect(container).toMatchSnapshot();
  });
});
