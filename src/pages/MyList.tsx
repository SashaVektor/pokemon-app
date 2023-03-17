import {useEffect} from "react"
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getUserPokemons } from "../app/reducers/getUserPokemons"
import Login from '../components/Login'
import PokemonCardGrid from '../components/PokemonCardGrid'
import Wrapper from '../sections/Wrapper'

const MyList = () => {
  const userInfo = useAppSelector((state) => state.app.userInfo)
  const userPokemons = useAppSelector((state) => state.pokemon.userPokemons)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserPokemons())
  }, [dispatch, userInfo])
  
  return (
    <div className='list'>
      {userInfo ? <PokemonCardGrid pokemons={userPokemons}/> : <Login />}
    </div>
  )
}

export default Wrapper(MyList)
