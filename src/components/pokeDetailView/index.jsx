import React, { useEffect } from 'react'
import { PokeDetailViewHandler } from './index.handler';

const PokeDetailView = ({name}) => {
  const handler = PokeDetailViewHandler();

  useEffect(() => {
    if (name) {
      handler.fetchPokemonData(name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className='flex flex-col items-center'>
      {handler.pokeData.sprites !== undefined && (
        <>
          <div className='flex flex-row'>
            <img src={handler.pokeData.sprites.front_default} alt={name} />
            <img src={handler.pokeData.sprites.back_default} alt={name} />
            <img src={handler.pokeData.sprites.front_shiny} alt={name} />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold capitalize text-center'>{handler.pokeData.name}</h2>
            <div className='flex flex-row flex-wrap mt-2 justify-center'>
              <p className='px-2'>Base experience: {handler.pokeData.base_experience}</p>
              <p className='px-2'>Height: {handler.pokeData.height}</p>
              <p className='px-2'>Height: {handler.pokeData.weight}</p>
            </div>
            <div className='flex flex-col justify-center text-center pt-4'>
              <h3 className='text-xl font-semibold'>Types</h3>
            </div>
            <div className='flex flex-row flex-wrap mt-2 justify-center'>
              {handler.pokeData.types.map((item) => (
                <p className='px-2 capitalize'>{item.type.name}</p>
              ))}
            </div>
            <div className='flex flex-col justify-center text-center pt-4'>
              <h3 className='text-xl font-semibold'>Stats</h3>
            </div>
            <div className='flex flex-row flex-wrap mt-2 justify-center'>
              {handler.pokeData.stats.map((item) => (
                <div className='flex flex-col items-center px-4 pb-4'>
                  <h3 className='text-lg font-semibold capitalize'>{item.stat.name}</h3>
                  <p className='px-2 capitalize'>Base stat: {item.base_stat}</p>
                  <p className='px-2 capitalize'>Effort: {item.effort}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-col justify-center text-center pt-4'>
              <h3 className='text-xl font-semibold'>Moves</h3>
            </div>
            <div className='flex flex-row flex-wrap mt-2 mb-10 justify-center'>
              {handler.pokeData.moves.map((item) => (
                <p className='mx-2 capitalize border-gray-800 border-b-2 border-dotted'>{item.move.name}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PokeDetailView