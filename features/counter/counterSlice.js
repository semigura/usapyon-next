import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      state.value = [
        ...state.value,
        {
          top: Math.floor(Math.random() * window.innerWidth + 60) - 30,
          right: Math.floor(Math.random() * window.innerHeight + 100) - 50,
        },
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
