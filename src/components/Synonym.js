import { useState } from "react";
import { useDrag } from "react-dnd";

const Synonym = ({ synonym, matchIndex }) => {
  const name = synonym.name;
  //const id = synonym.id;
  const [selected, setSelected] = useState(false);
  const [{ isDragging }, dragRef] = useDrag({
    type: "synonym",
    item: {
      name: name,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div style={{ display: "flex" }} ref={dragRef}>
      {isDragging}
      <button
        id={matchIndex}
        value={matchIndex}
        style={{ background: selected ? "blue" : "pink" }}
        onClick={() => (!selected ? setSelected(true) : setSelected(false))}
      >
        {matchIndex}
      </button>
      <div style={{ background: "orange" }}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Synonym;
