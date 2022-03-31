import { useState } from "react";
import axios from "axios";
import WordField from "./WordField";

const StudyListForm = ({ user }) => {
  const userId = user["id"];
  const [title, setTitle] = useState("");
  const [wordsHash, setWordsHash] = useState({});
  const [wordsArray, setWordsArray] = useState([]);
  const [wordCount, setWordCount] = useState(1);
  const [isReady, setIsReady] = useState(false);
  //const [error, setError] = useState()

  const formatWords = () => {
    setWordsArray(Object.values(wordsHash));
    setIsReady(true);
  };

  const handleCreateStudyList = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("auth_token");
    if (isReady) {
      axios
        .post(
          `http://localhost:3000/api/study_lists`,
          {
            study_list: { title: title, user_id: userId },
            words: wordsArray,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    }
  };

  const handleWordsHash = (event) => {
    setWordsHash({ ...wordsHash, [event.target.name]: event.target.value });
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
              <WordField
                key={index}
                wordIndex={index}
                handleWordsHash={handleWordsHash}
              />
            );
          })}

          <button
            onClick={() => {
              setWordCount(wordCount + 1);
            }}
          >
            add word
          </button>
        </div>

        <button onClick={formatWords} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudyListForm;
