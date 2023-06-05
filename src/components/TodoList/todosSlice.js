import { createSlice } from "@reduxjs/toolkit";
const _ = require("lodash");

export default createSlice({
  name: "todoList",
  initialState: {
    list: [
      {
        id: 1,
        name: "Hoc phi",
        completed: false,
        priority: "Medium",
      },
      { id: 2, name: "Don dep nha", completed: true, priority: "High" },
      { id: 3, name: "Di cho", completed: false, priority: "Low" },
      { id: 4, name: "Lam bai tap", completed: false, priority: "Medium" },
      { id: 5, name: "Mua điện thoại mới", completed: false, priority: "High" },
    ],
    sortType: "id",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const currentTodo = state.list.findIndex(
        (todo) => todo.id === action.payload
      );
      if (currentTodo !== -1) {
        state.list.splice(currentTodo, 1);
      }
    },
    sortTodo: (state, action) => {
      state.sortType = action.payload;
      var clone = _.cloneDeep(state.list);
      if (state.sortType === "id") {
        clone.sort((a, b) => a.id - b.id);
        state.list = clone;
      }
      if (state.sortType === "az") {
        clone = _.sortBy(clone, (o) => o.name.toLowerCase());
        state.list = clone;
      }
      if (state.sortType === "za") {
        clone = _.sortBy(clone, (o) => o.name.toLowerCase()).reverse();
        state.list = clone;
      }
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.list.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
