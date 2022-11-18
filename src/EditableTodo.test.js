import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import EditableTodo from "./EditableTodo";
import todos from "./_testData_";

describe("works", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todos[0]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={todos[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("should remove todo when delete clicked", function () {
    const { container } = render(<TodoApp initialTodos={todos.slice(0, 1)} />);
    const removeBtn = container.querySelector(".EditableTodo-delBtn");
    expect(container.querySelector(".EditableTodo")).toBeInTheDocument();
    fireEvent.click(removeBtn);
    expect(container.querySelector(".EditableTodo")).not.toBeInTheDocument();
  });

  it("should show the form when toggle edit", function () {
    const { container } = render(<TodoApp initialTodos={todos.slice(0, 1)} />);

    const editBtn = container.querySelector(".EditableTodo-toggle");
    expect(
      container.querySelector(".EditableTodo > .NewTodoForm")
    ).not.toBeInTheDocument();
    fireEvent.click(editBtn);
    expect(
      container.querySelector(".EditableTodo > .NewTodoForm")
    ).toBeInTheDocument();

    const goBtn = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(goBtn);
    expect(
      container.querySelector(".EditableTodo > .NewTodoForm")
    ).not.toBeInTheDocument();
  });

  it("should correctly update a todo", function () {
    const { container, debug } = render(
      <TodoApp initialTodos={todos.slice(0, 1)} />
    );
    const editBtn = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editBtn);

    const newForm = container.querySelector(".EditableTodo > .NewTodoForm");
    const descVal = newForm.querySelector("#newTodo-description").value;
    const titleVal = newForm.querySelector("#newTodo-title").value;
    const priorityVal = newForm.querySelector("#newTodo-priority").value;

    expect(descVal).toEqual(todos[0].description);
    expect(titleVal).toEqual(todos[0].title);
    expect(Number(priorityVal)).toEqual(todos[0].priority);

    const desc = newForm.querySelector("#newTodo-description");
    fireEvent.change(desc, { target: { value: "new description" } });

    const goBtn = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(goBtn);

    expect(
      container.querySelector(".EditableTodo > .NewTodoForm")
    ).not.toBeInTheDocument();

    // TODO: find good matcher?
    expect(container.querySelector(".Todo")).toContainElement(
      `<div class="Todo" id="${todos[0].id}"><div>
          <b>t1</b> <small>(priority: 2)</small>
        </div>
        <div>
          <small>new description</small>
        </div>
      </div>`
    );
  });
});
