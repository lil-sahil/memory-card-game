import React from "react";
import Card from "./Card";

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
  ];

  return (
    <div id="gallery">
      {pokemonNames.map((entry) => {
        return (
          <Card
            pokemonName={entry.name}
            key={entry.id}
            updateClicks={props.updateClicks}
          ></Card>
        );
      })}
    </div>
  );
};

export default Gallery;
