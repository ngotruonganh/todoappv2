import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});
