import { useState } from "react";
import axios from "axios";

const StudyListForm = () => {
  //const [studyListId, setStudyListId] = useState();
  const [title, setTitle] = useState("");
  const [newWord, setNewWord] = useState("");
  const [words, setWords] = useState([]);
  const [wordCount, setWordCount] = useState(1);
  //const [error, setError] = useState()
  const [isReady, setIsReady] = useState(false);

  const handleCreateStudyList = (event) => {
    event.preventDefault();
    if (isReady == true) {
      console.log("another list made");
      axios.post(`http://localhost:3000/api/study_lists`, {
        title: title,
        words: words,
      });
    }
  };

  return (
    <div id="studyListForm">
      <div id="errors"></div>
      <form onSubmit={handleCreateStudyList}>
        <div>Make a new list</div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <label htmlFor="words">Add Words </label>
          {[...Array(wordCount)].map((_, index) => {
            return (
              <div key={index}>
                <input
                  key={index}
                  placeholder="new word"
                  onChange={(e) => setNewWord(e.target.value)}
                />
              </div>
            );
          })}
          <button
            onClick={() => {
              setWords([...words, newWord]);
              setWordCount(wordCount + 1);
            }}
          >
            add word
          </button>
        </div>
        <button type="submit" onClick={() => setIsReady(true)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudyListForm;
