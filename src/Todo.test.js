import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo.js";
import todos from "./_testData_.js";

describe("renders a single todo", function () {
  it("renders without crashing", function () {
    render(<Todo {...todos[0]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo {...todos[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a todo as expected", function () {
    const { container } = render(<Todo {...todos[0]} />);
    expect(container).toBeInTheDocument(`(priority: ${todos[0].priority})`);
    expect(container).toContainHTML(`<small>${todos[0].description}</small>`);
  });

  it("should return null if no/incomplete props passed in", function () {
    const { container } = render(<Todo />);
    expect(container).not.toHaveTextContent(`(priority:`);
    expect(container).toContainHTML("<div />");
  });
});
