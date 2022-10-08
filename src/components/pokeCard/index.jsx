import React, { useEffect, useState } from 'react';

const PokeCard = ({name}) => {
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    fetchPokemonData(name);
  }, [name]);

  const fetchPokemonData = async (pokeName) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName);
    const data = await response.json();
    setPokeData(data);
  };

  return (
    <div className='bg-orange-500 text-white h-full w-full flex flex-col'>
      {pokeData.sprites !== undefined && (
        <>
          <div className='h-3/4 flex justify-center'>
            <img src={pokeData.sprites.front_default} alt={name} />
          </div>
          <div className='h-1/4 flex justify-center'>
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default PokeCard