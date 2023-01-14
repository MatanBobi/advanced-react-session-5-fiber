import React, { useState, useEffect } from "react";
import { simulateSleep } from "./helpers/utils";
import { PokemonData } from "./types";

const Pokemon = ({
  name,
  searchValue,
}: {
  name: string;
  searchValue: string;
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [name]);

  simulateSleep(2);

  const matchesFilterAtIndex = name
    .toLowerCase()
    .indexOf(searchValue.toLowerCase());

  if (matchesFilterAtIndex >= 0 && searchValue !== "") {
    return (
      <div className="pokemon-wrapper">
        {pokemonData.sprites && (
          <img src={pokemonData.sprites.front_default} alt="" />
        )}
        <div className="name">
          {name.substring(0, matchesFilterAtIndex)}
          <span className="highlight">
            {name.substring(
              matchesFilterAtIndex,
              matchesFilterAtIndex + searchValue.length
            )}
          </span>

          {name.substring(matchesFilterAtIndex + searchValue.length)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="pokemon-wrapper">
        {pokemonData.sprites && (
          <img src={pokemonData.sprites.front_default} alt="" />
        )}
        <div className="name">{name}</div>
      </div>
    );
  }
};

export default Pokemon;
