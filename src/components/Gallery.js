import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

// Custom Hooks
import { useInitialRender } from "../hooks/useInitialRender";

// Utils
import { randomizer } from "../utils/randomizer";

const Gallery = (props) => {
  //   List of pokemon characters
  const pokemonNames = [
    { name: "ditto", id: 1 },
    { name: "pikachu", id: 2 },
    { name: "eevee", id: 3 },
    { name: "charizard", id: 4 },
    { name: "charmander", id: 5 },
    { name: "mewtwo", id: 6 },
    { name: "mew", id: 7 },
    { name: "squirtle", id: 8 },
    { name: "bulbasaur", id: 9 },
    { name: "snorlax", id: 10 },
    { name: "garchomp", id: 11 },
    { name: "lucario", id: 12 },
    { name: "gardevoir", id: 13 },
    { name: "piplup", id: 14 },
    { name: "dialga", id: 15 },
    { name: "palkia", id: 16 },
    { name: "gyarados", id: 17 },
    { name: "blastoise", id: 18 },
  ];

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
