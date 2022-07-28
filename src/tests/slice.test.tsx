import { todoReducer, addTodo, clearTodo, toggleTodo } from "../store/reducer";

describe("Main", () => {
  it("should return default", () => {
    const res = todoReducer(undefined, { type: "" });
    expect(res.todos).toEqual([]);
  });

  it("should add new todo item with addTodo action", () => {
    const action = { type: addTodo.type, payload: "new" };
    const res = todoReducer(
      {
        todos: [],
      },
      action
    );
    expect(res.todos[0].text).toBe("new");
    expect(res.todos[0].completed).toBe(false);
  });

  it("should toggle todo completed status with toggleTodo action", () => {
    const todos = [
      {
        id: "123",
        text: "action.payload",
        completed: false,
      },
    ];
    const action = { type: toggleTodo.type, payload: "123" };

    const res = todoReducer(
      {
        todos: todos,
      },
      action
    );

    expect(res.todos[0].completed).toBe(true);
  });

  it("should clear todo by status true with toggleTodo action", () => {
    const todos = [
      {
        id: "123",
        text: "action.payload",
        completed: false,
      },
      {
        id: "456",
        text: "action.payload",
        completed: true,
      },
      {
        id: "789",
        text: "action.payload",
        completed: true,
      },
    ];

    const action = { type: clearTodo.type };

    const res = todoReducer(
      {
        todos: todos,
      },
      action
    );

    expect(res.todos.length).toEqual(1);
  });
});
