import React, { memo, useCallback, useEffect, useState } from "react";
import PokemonItem from "./Pokemon";
import { Pokemon } from "./types";

const PokemonsList = ({ searchValue }: { searchValue: string }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, [setPokemons]);

  const sortedPokemons = pokemons.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <div className="pokemons-list">
      {sortedPokemons.map((pokemon) => (
        <PokemonItem
          name={pokemon.name}
          searchValue={searchValue}
          key={pokemon.name}
        />
      ))}
    </div>
  );
};

export default memo(PokemonsList);
