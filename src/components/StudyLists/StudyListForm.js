import { useState } from "react";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import LoadingDisplay from "../LoadingDisplay";
import styled from "styled-components";

const StyledStudyListForm = styled.div`
  .new-list-container {
    background-color: #e6fdff;
  }
  .brand-style {
    font-family: "Rampart One", sans-serif;
    color: #100804;
  }
  .h1 {
    font-size: 38px;
  }
`;

const StudyListForm = ({ user }) => {
  const [title, setTitle] = useState("");
  const [wordsHash, setWordsHash] = useState({});
  const [wordsArray, setWordsArray] = useState([]);
  const [wordCount, setWordCount] = useState(1);
  const [wordsArrayFormatted, setWordsArrayFormatted] = useState(false);
  const [isListCreated, setIsListCreated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWordsHash = (event) => {
    setWordsHash({ ...wordsHash, [event.target.name]: event.target.value });
  };

  const formatWords = () => {
    setWordsArray(Object.values(wordsHash));
    setWordsArrayFormatted(true);
  };

  const handleCreateStudyList = (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("auth_token");
    if (wordsArrayFormatted && (!token || user == {})) {
      setError(
        "Oops... it looks like your account authorization is expired. Please 'log-out' and then 'log-in' again to renew your authorization and make a list."
      );
    }
    if (wordsArrayFormatted && token && user != {}) {
      setLoading(true);
      axios
        .post(
          `${API_ROOT}api/study_lists`,
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
          setLoading(false);
          setWordsArrayFormatted(false);
          setError(
            "Error: Please make sure to include a unique title and 1-10 valid words and try again."
          );
        });
    }
  };

  if (isListCreated) {
    return (
      <Redirect
        to={{
          pathname: `/`,
        }}
      />
    );
  }

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      {loading ? <LoadingDisplay /> : null}
      <div className="container justify-content-center">
        <StyledStudyListForm>
          <div className="new-list-container card px-3 py-5 mt-5 justify-content-center">
            <h1 className="h1 brand-style text-center mb-4">New List</h1>
            <div className="d-flex justify-content-center">
              <ul>
                <li>
                  If a word is misspelled or doesn&apos;t exist in the
                  thesaurus, it will be skipped over and the list will be made
                  without it.
                </li>
              </ul>
            </div>

            <form onSubmit={handleCreateStudyList}>
              <div className="container d-flex justify-content-center">
                <div className="row g-0 col-10 col-md-6">
                  <label htmlFor="title">Title</label>
                  <input
                    className="ps-1"
                    id="title"
                    placeholder="Title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <div className="mx-auto mt-3">
                    <label htmlFor="words">Words </label>

                    <div className="d-flex mb-4">
                      <div className="col-9">
                        {[...Array(wordCount)].map((_, index) => {
                          return (
                            <input
                              className="container-fluid ps-1"
                              key={index}
                              name={`word${index}`}
                              placeholder={`word #${index + 1}`}
                              onChange={handleWordsHash}
                            />
                          );
                        })}
                      </div>
                      <div className="col-3 d-flex justify-content-end align-items-start">
                        {wordCount < 10 ? (
                          <button
                            className="btn btn-green"
                            onClick={() => {
                              setWordCount(wordCount + 1);
                            }}
                          >
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-green"
                    onClick={formatWords}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </StyledStudyListForm>
      </div>
    </div>
  );
};

export default StudyListForm;
