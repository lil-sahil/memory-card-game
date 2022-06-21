import React from "react";
import { useEffect, useState } from "react";

const Scoreboard = (props) => {
  const [currentScoreColor, setCurrentScoreColor] = useState();

  useEffect(() => {
    if (props.currentScore < props.bestScore) {
      setCurrentScoreColor("current-score-color-below");
    } else if (props.currentScore === props.bestScore) {
      setCurrentScoreColor("current-score-color-equal");
    } else {
      setCurrentScoreColor("current-score-color-more");
    }
  }, [props.currentScore, props.bestScore]);

  return (
    <div id="scoreboard">
      <div id="current-score">
        Current Score:{" "}
        <span className={currentScoreColor}>{props.currentScore}</span>
      </div>

      <div id="best-score">
        Best Score: <span className="best-score-color">{props.bestScore}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
