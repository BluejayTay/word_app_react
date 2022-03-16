import React from "react";
import useApiLists from "./useApiLists";

const StudyListIndex = () => {
  const [studyLists] = useApiLists();

  return (
    <div>
      {studyLists.map((studyList) => (
        <h1 key={studyList.id}>{studyList.title}</h1>
      ))}
      <h2>Hello</h2>
    </div>
  );
};

export default StudyListIndex;
