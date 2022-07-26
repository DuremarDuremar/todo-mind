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
    removeTodo(state) {},
    toggleTodo(state, action: PayloadAction<string>) {},
  },
});

export const todoReducer = todoSlice.reducer;
