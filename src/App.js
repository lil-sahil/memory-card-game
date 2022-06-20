import { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [storedClicks, setStoredClicks] = useState([]);
  const [score, setScore] = useState(0);

  const updateClicks = (pokemonName) => {
    // reset the score to 0, as the user has selected a name that they already picked before.
    if (storedClicks.includes(pokemonName)) {
      setScore(0);
      setStoredClicks([]);
    } else {
      // Update the score
      setScore(score + 1);

      // Add the pokemon name to list
      setStoredClicks((oldArray) => [...oldArray, pokemonName]);
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <Header></Header>
        <Scoreboard currentScore={score}></Scoreboard>
        <Gallery updateClicks={updateClicks}></Gallery>
      </div>
    </div>
  );
}

export default App;
