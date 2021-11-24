import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});

export type RootState = {
  counter: {
    value: {
      type: string;
      image: {
        imageSrc: string;
        width: number;
        height: number;
      };
      top: number;
      right: number;
    }[];
    risu: number;
    kuma: number;
    aja: number;
    usagi: number;
  };
};
