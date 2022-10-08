import { useState } from 'react'
export const PokeDetailViewHandler = () => {
  const [pokeData, setPokeData] = useState({});

  const fetchPokemonData = async (pokeName) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName);
    const data = await response.json();
    setPokeData(data);
    console.log(data);
  };
  return {
    pokeData,
    fetchPokemonData
  }
}
