import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "sort",
  initialState: {
    type: "az",
  },
  reducers: {
    sortChange: (state, action) => {
      state.type = action.payload;
    },
  },
});
