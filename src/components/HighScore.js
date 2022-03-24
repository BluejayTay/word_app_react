import axios from "axios";

const HighScore = ({ studyListId, gameEnd, score, previousHighScore }) => {
  const handleSaveScore = () => {
    axios.put(`http://localhost:3000/api/study_lists/${studyListId}`, {
      high_score: score,
    });
  };

  if (gameEnd == true)
    if (
      (previousHighScore == null && score > previousHighScore) ||
      score < previousHighScore
    )
      return (
        <div>
          <button onClick={handleSaveScore}>Save your HighScore!</button>
        </div>
      );
    else return null;
  else if (gameEnd == false) return null;
};
export default HighScore;
