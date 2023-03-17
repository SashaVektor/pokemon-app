import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemonData } from '../../app/reducers/getPokemonData';
import PokemonCardGrid from '../../components/PokemonCardGrid';

const Evolution = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const currentPokemon = useAppSelector((state) => state.pokemon.currentPokemon)
  const randomPokemons = useAppSelector((state) => state.pokemon.randomPokemons)

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = currentPokemon?.evolution.map(({pokemon}) => pokemon)
      await dispatch(getPokemonData(pokemons!))
      setIsLoaded(true)
    }
    fetchData();
  }, [dispatch, currentPokemon])
  return (
    <div className='page'>
      {isLoaded && <PokemonCardGrid pokemons={randomPokemons!}/>}
    </div>
  )
}

export default Evolution
