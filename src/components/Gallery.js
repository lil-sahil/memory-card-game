import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

// Custom Hooks
import { useInitialRender } from "../hooks/useInitialRender";

// Utils
import { randomizer } from "../utils/randomizer";

// Set-up File
import { pokemonNames } from "../setUp";

const Gallery = (props) => {
  //   List of pokemon characters

  //   Initialize Index array to choose the order in which to display the pokemon.
  const [indexArray, setIndexArray] = useState(
    Array.from(Array(pokemonNames.length), (e, i) => i)
  );

  //   Custom hook to not change the order on the very first render.
  let initialRender = useInitialRender();

  useEffect(() => {
    if (!initialRender) {
      setIndexArray(randomizer(pokemonNames.length));
    }
  }, [props.currentScore]);

  return (
    <div id="gallery">
      {indexArray.map((index) => {
        return (
          <Card
            pokemonName={pokemonNames[index].name}
            key={pokemonNames[index].key}
            updateClicks={props.updateClicks}
          ></Card>
        );
      })}
    </div>
  );
};

export default Gallery;
