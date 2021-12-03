import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { incrementRedrawButtonCount } from "../features/counter/counterSlice";

export default function Sandbox() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(incrementRedrawButtonCount({ top: "100px", bottom: "200px" }));
  });
  return <></>;
}
