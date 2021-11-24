import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const animalImages = (animal) => {
  const random7 = Math.floor(Math.random() * 7);
  switch (animal) {
    case "aja":
      return { imageSrc: "/images/aja.png", width: "120", height: "120" };
    case "kuma":
      return { imageSrc: "/images/kuma.png", width: "92", height: "112" };
    case "risu":
      return { imageSrc: "/images/risu.png", width: "89", height: "83" };
    default:
      return {
        imageSrc: `/images/usagi_${random7}.png`,
        width: "67",
        height: "127",
      };
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
    increaseButtons: [],
  },
  reducers: {
    increment: (state) => {
      const animal = selectAnimals();
      // eslint-disable-next-line no-param-reassign
      state.value = [
        ...state.value,
        {
          type: animal,
          image: animalImages(animal),
          top: Math.floor(Math.random() * (window.innerHeight + 240)) - 120,
          right: Math.floor(Math.random() * (window.innerWidth + 240)) - 120,
        },
      ];
      // eslint-disable-next-line no-param-reassign
      state[animal] += 1;
    },
    incrementRedrawButtonCount: (
      state,
      action: PayloadAction<{ top: string; bottom: string }>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.increaseButtons = [
        ...state.increaseButtons,
        {
          top: action.payload.top,
          bottom: action.payload.bottom,
        },
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementRedrawButtonCount } = counterSlice.actions;

export default counterSlice.reducer;
