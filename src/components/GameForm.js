import { useState } from "react";
//import { Redirect } from "react-router-dom";
import useApiLists from "./useApiLists";

const GameForm = () => {
  const [studyLists] = useApiLists();
  const [studyList, setStudyList] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="studyList">
          Choose a List:
          <select
            id="studyList"
            value={studyList}
            onChange={(e) => setStudyList(e.target.value)}
            onBlur={(e) => setStudyList(e.target.value)}
          >
            <option />
            {studyLists.map((studyList) => (
              <option key={studyList.id}>{studyList.title}</option>
            ))}
          </select>
        </label>
        <button>Play</button>
      </form>
    </div>
  );
};

export default GameForm;
