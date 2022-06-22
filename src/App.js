import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [storedClicks, setStoredClicks] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [displayStateModal, setDisplayStateModal] = useState("hide");

  const updateClicks = (pokemonName) => {
    // reset the score to 0, as the user has selected a name that they already picked before.
    if (storedClicks.includes(pokemonName)) {
      if (score > bestScore) {
        setBestScore(score);
        setDisplayStateModal("show");
      }
      // Reset Score
      setScore(0);
      setStoredClicks([]);
    } else {
      // Update the score
      setScore(score + 1);

      // Add the pokemon name to list
      setStoredClicks((oldArray) => [...oldArray, pokemonName]);
    }
  };

  const displayHandler = () => {
    setDisplayStateModal("hide");
  };

  return (
    <div className="App">
      <div className="main-container">
        <Header></Header>
        <Scoreboard currentScore={score} bestScore={bestScore}></Scoreboard>
        <Gallery updateClicks={updateClicks} currentScore={score}></Gallery>
        <Modal
          display={displayStateModal}
          handleDisplay={displayHandler}
        ></Modal>
      </div>
    </div>
  );
}

export default App;
