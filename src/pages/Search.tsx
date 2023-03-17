import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import Wrapper from '../sections/Wrapper'
import { debounce } from '../utils/debounce';

const Search = () => {
  const dispatch = useAppDispatch();
  const allPokemons = useAppSelector((state) => state.pokemon.allPokemon)
  const randomPokemons = useAppSelector((state) => state.pokemon.randomPokemons)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemons) {
      const clonedPokemons = [...allPokemons]
      const randomPokemonsId = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0, 20)
      dispatch(getPokemonData(randomPokemonsId))
    }
  }, [allPokemons, dispatch])

  const handleChange = debounce((value:string) => getPokemon(value), 300)

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemons?.filter((pokemon) => pokemon.name.includes(value.toLowerCase()))
      dispatch(getPokemonData(pokemons!))
    } else {
      const clonedPokemons = [...(allPokemons as [])]
      const randomPokemonsId = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0, 20)
      dispatch(getPokemonData(randomPokemonsId))
    }
  }

  return (
    <>
      <div className="search">
        <input type="text" placeholder='Search Pokemon...'
          className='pokemon-searchbar' onChange={e => handleChange(e.target.value)}/>
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search)
