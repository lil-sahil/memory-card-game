import React from "react";
import { useState, useEffect } from "react";

// Utils
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const Card = (props) => {
  const { pokemonName } = props;

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((response) => setImageUrl(response.sprites.front_default));
  }, [pokemonName]);

  return (
    <div
      className="card"
      id={pokemonName}
      onClick={() => props.updateClicks(pokemonName)}
    >
      <img src={imageUrl} alt="Pokemon"></img>
      <p>{capitalizeFirstLetter(pokemonName)}</p>
    </div>
  );
};

export default Card;
