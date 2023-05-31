import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Thanh toan hoc phi', completed: false, priority: 'Medium' },
    { id: 2, name: 'Thi', completed: true, priority: 'High' },
    { id: 3, name: 'Di cho', completed: false, priority: 'Low' },
    { id: 4, name: 'An', completed: false, priority: 'Medium' },
    { id: 5, name: 'Mua điện thoại mới', completed: false, priority: 'High' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    }
  }
});