import { createSlice } from "@reduxjs/toolkit";

const animalType = [
  "usagi",
  "usagi",
  "kuma",
  "risu",
  "aja",
]

const animalImage = [
  {"usagi": ""},
  {"kuma": ""},
  {"risu": ""},
  {"aja": ""},
]

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
          type: animalType[Math.floor(Math.random() * 5)],
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
