import { useRef, useState } from "react";
import Piace from "./Piace";
import { copyPosition, createPosition } from "../../helper";

const Piaces = () => {
  const ref = useRef();

  const [state, setState] = useState(createPosition());

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);

    return { x, y };
  };

  const onDrop = (e) => {
    const newPosition = copyPosition(state);
    const { x, y } = calculateCoords(e);

    const [p, rank, file] = e.dataTransfer.getData("text").split(",");

    newPosition[rank][file] = "";
    newPosition[x][y] = p;

    setState(newPosition);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div ref={ref} className="pieces" onDrop={onDrop} onDragOver={onDragOver}>
      {state.map((r, rank) =>
        r.map((f, file) =>
          state[rank][file] ? (
            <Piace
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={state[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Piaces;
