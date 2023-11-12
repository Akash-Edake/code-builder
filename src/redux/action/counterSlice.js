import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  userTheme: "light",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    UserTheme: (state, action) => {
      state.userTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { UserTheme } = counterSlice.actions;

export default counterSlice.reducer;
