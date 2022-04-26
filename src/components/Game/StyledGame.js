import styled from "styled-components";

const StyledGame = styled.div`
  .brand-title {
    font-family: "Rampart One", sans-serif;
    font-size: 40px;
    margin: 0px;
    text-align: center;
  }
  .game-panel {
    background-color: #100804;
    border-top: 2px solid #100804;
    border-bottom: 2px solid #100804;
  }
  .right-panel {
    background-color: #fcffee;
    font-size: 18px;
    display: flex;
  }
  .left-panel {
    border-right: 2px solid #100804;
  }
  .record-display,
  .timer-display,
  .match-display {
    background-color: #fcffee;
    font-size: 18px;
    text-align: center;
    margin: 0px;
    padding: 4px;
  }
  .record-display,
  .timer-display {
    border-right: 2px solid #100804;
  }
  .game-card {
    border: 1px solid #100804;
    margin-top: 24px;
    margin-bottom: 4px;
  }
  .game-title {
    background-color: #e4fbff;
  }
  .game-body {
    background-color: #aadeee;
    padding-top: 8px;
    paddimg-bottom: 8px;
  }
  .word-btn {
    background-color: #eefeff;
    font-size: 20px;
    font-weight: 500;
  }
  .selected {
    background-color: #ff501f;
    color: #eefeff;
  }
  .btn:disabled {
    background-color: #ff621f;
  }
  .synonym {
    justify-content: start;
    text-align: start;
    padding-left: 30px;
  }
  .word {
    justify-content: end;
    text-align: end;
    padding-right: 30px;
  }

  @media screen and (max-width: 767px) {
    .brand-title {
      font-size: 34px;
    }
    .synonym {
      padding-left: 10px;
    }
    .word {
      padding-right: 10px;
    }
    .game-card {
      margin-top: 16px;
    }
    .h2 {
      font-size: 22px;
    }
    .h3 {
      font-size: 18px;
      margin-left: 4px;
    }
    .left-panel {
      border-right: 0px;
      border-bottom: 2px solid #100804;
    }
    .right-panel {
      font-size: 16px;
    }
    .record-display,
    .timer-display,
    .match-display {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .word-btn {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    .brand-title {
      font-size: 28px;
    }
    .record-display,
    .timer-display,
    .match-display {
      font-size: 12px;
    }
    .game-card {
      margin-top: 4px;
    }
    .right-panel {
      background-color: #fcffee;
      font-size: 14px;
    }
    .h3 {
      font-size: 14px;
      margin-left: 4px;
    }
    .h2 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 370px) {
    .brand-title {
      font-size: 24px;
    }
    .synonym {
      padding-left: 0px;
    }
    .word {
      padding-right: 0px;
    }
    .record-display,
    .timer-display,
    .match-display {
      display: block;
    }
    .right-panel {
      font-size: 12px;
    }
  }
  @media screen and (min-width: 500px) {
    .word-btn:hover {
      background-color: #ff501f;
      color: #eefeff;
      box-shadow: 4px 4px 5px 2px rgba(231, 85, 12, 0.482);
    }
  }
  @media screen and (min-width: 1200px) {
    .record-display,
    .timer-display,
    .match-display {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .h3 {
      margin-left: 6px;
      font-size: 26px;
    }
    .right-panel {
      font-size: 20px;
    }
  }
`;

export default StyledGame;
