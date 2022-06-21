import React from "react";

const Scoreboard = (props) => {
  return (
    <div id="scoreboard">
      <div id="current-score">Current Score: {props.currentScore}</div>

      <div id="best-score">Best Score: {props.bestScore}</div>
    </div>
  );
};

export default Scoreboard;
