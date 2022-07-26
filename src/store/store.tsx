import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./reducer";

export const setupStore = () => {
  return configureStore({
    reducer: todoReducer,
  });
};

export type RootState = ReturnType<typeof todoReducer>;
export type TypeStore = ReturnType<typeof setupStore>;
export type TypeDispatch = TypeStore["dispatch"];
