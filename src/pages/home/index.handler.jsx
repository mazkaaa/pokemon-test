import { useState } from 'react'

const HomeHandler = () => {
  const [viewPokemon, setViewPokemon] = useState(false);

  return {
    viewPokemon,
    setViewPokemon,
  }
}

export default HomeHandler;
