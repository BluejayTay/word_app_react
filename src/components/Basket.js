//import React, { useState } from "react";
import { useDrop } from "react-dnd";
//import Synonym from "./Synonym";

const Basket = (props) => {
  //const synonyms = props.synonyms;
  //const synonym = synonyms.slice({ matchIndex });
  //const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "synonym",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className="Basket"
      style={{
        background: "purple",
        width: "200px",
        height: "100px",
        borderWidth: "5px",
        borderColor: "black",
        borderStyle: "solid",
      }}
      ref={dropRef}
    >
      {isOver && <div>Drop Here!</div>}
    </div>
  );
};
export default Basket;
