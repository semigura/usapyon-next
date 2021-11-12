import { createSlice } from "@reduxjs/toolkit";

const selectAnimals = () => {
  const random20 = Math.floor(Math.random() * 21);
  const random100 = Math.floor(Math.random() * 101);
  switch (random100) {
    case 0:
      return "risu";
    case 1:
      return "kuma";
    case 2:
      switch (random20) {
        case 0:
          return "aja";
        default:
          return "usagi";
      }
    default:
      return "usagi";
  }
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
    risu: 0,
    kuma: 0,
    aja: 0,
    usagi: 0,
  },
  reducers: {
    increment: (state) => {
      const animal = selectAnimals();
      // eslint-disable-next-line no-param-reassign
      state.value = [
        ...state.value,
        {
          type: animal,
          top: Math.floor(Math.random() * window.innerWidth + 60) - 30,
          right: Math.floor(Math.random() * window.innerHeight + 100) - 50,
        },
      ];
      // eslint-disable-next-line no-param-reassign
      state[animal] += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
