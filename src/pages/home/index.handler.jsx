import { useEffect, useState } from 'react'

const HomeHandler = () => {
  const [viewPokemon, setViewPokemon] = useState(false);
  const [data, setData] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);

  const fetchPokemons = async (limit) => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
    const dataRes = await result.json();
    setData(dataRes.results);
  };

  useEffect(() => {
    setFetchLoading(false);
  }, [data.length]);

  return {
    viewPokemon,
    setViewPokemon,
    fetchPokemons,
    data,
    fetchLoading,
    setFetchLoading,
  }
}

export default HomeHandler;
