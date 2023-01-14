import React from "react";

const PokemonImage = ({ src, name }: { src: string; name: string }) => {
  return <img src={src} alt={name} />;
};

export default PokemonImage;
