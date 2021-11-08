import React from "react";
import { mockPokemonData } from "../mock/pokeData";

function PokeCard() {
  const { name, sprites, video } = mockPokemonData;
  const { front_default, front_shiny } = sprites;

  return (
    <>
      <h2>{name}</h2>
      <img src={front_default} alt={name} />
      <a href={video}> click here to watch the video</a>
      <img src={front_shiny} alt={name} />
    </>
  );
}

export default PokeCard;
