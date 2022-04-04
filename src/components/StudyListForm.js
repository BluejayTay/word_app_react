import { useState } from "react";
import axios from "axios";
import WordField from "./WordField";
import { Redirect } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const StudyListForm = ({ user, setSuccessMessage }) => {
  const [title, setTitle] = useState("");
  const [wordsHash, setWordsHash] = useState({});
  const [wordsArray, setWordsArray] = useState([]);
  const [wordCount, setWordCount] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const [isListCreated, setIsListCreated] = useState(false);
  const [error, setError] = useState("");

  const handleWordsHash = (event) => {
    setWordsHash({ ...wordsHash, [event.target.name]: event.target.value });
  };

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
            study_list: { title: title, user_id: user["id"] },
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
          setIsListCreated(true);
        })
        .catch((error) => {
          console.log(error);
          setIsReady(false);
          setError(
            "An error occurred while making the list. Please make sure to include a title and 1-10 valid words and try again."
          );
        });
    }
  };

  if (isListCreated) {
    setSuccessMessage("New list created!");
    return (
      <Redirect
        to={{
          pathname: `/`,
        }}
      />
    );
  }

  return (
    <div id="studyListForm">
      <ErrorMessage error={error} setError={setError} />
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
          {wordCount < 10 ? (
            <button
              onClick={() => {
                setWordCount(wordCount + 1);
              }}
            >
              add word
            </button>
          ) : null}
        </div>

        <button onClick={formatWords} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudyListForm;
