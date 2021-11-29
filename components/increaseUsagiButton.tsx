import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";

import Sound from "../assets/sounds/appearance.mp3";
import { increment } from "../features/counter/counterSlice";
import { RootState } from "../store/store";

export function IncreaseUsagiButton() {
  const dispatch = useDispatch();
  const [play] = useSound(Sound);
  return (
    <button
      type="button"
      onClick={() => {
        play();
        dispatch(increment());
      }}
      style={{ fontSize: "500%" }}
    >
      うさぎを増やす
    </button>
  );
}

export function DisplayUsagi() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      {count.map((usagiItem, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            position: "fixed",
            top: usagiItem.top,
            right: usagiItem.right,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={usagiItem.image.imageSrc}
            width={usagiItem.image.width}
            height={usagiItem.image.height}
            alt=""
          />
        </div>
      ))}
    </>
  );
}
