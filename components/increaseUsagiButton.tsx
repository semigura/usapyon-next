import { useSelector, useDispatch } from "react-redux";

import { increment } from "../features/counter/counterSlice";

export function IncreaseUsagiButton() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(increment())}
        style={{ fontSize: "500%" }}
      >
        うさぎを増やす
      </button>
      {count.map((usagiItem, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            position: "absolute",
            top: usagiItem.top,
            right: usagiItem.right,
          }}
        >
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
