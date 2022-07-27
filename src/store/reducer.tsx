import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface State {
  todos: todoItem[];
}

const initialState: State = {
  todos: [] as todoItem[],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    clearTodo(state) {},
    toggleTodo(state, action: PayloadAction<string>) {
      state.todos.map(
        (todo) =>
          todo.id === action.payload && (todo.completed = !todo.completed)
      );
    },
  },
});

export const { addTodo, toggleTodo, clearTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
