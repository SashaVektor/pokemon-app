import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { addPokemonToList } from '../app/reducers/addPokemonToList'
import { removeFromCompare } from '../app/slices/PokemonSlice'
import { pokemonTypes } from '../utils/getPokemonTypes'
import { PokemonStatType, PokemonTypeInterface, UserPokemonsType } from '../utils/Types'

const CompareContainer = ({ pokemon = undefined, isEmpty = false }: {
    pokemon?: UserPokemonsType, isEmpty?: boolean
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const createStatsArray = (types: PokemonTypeInterface[], statType: PokemonStatType) => {
        const statsArray: {name: string, image: string}[] = [];
        const statsSet = new Set<string>(); 
        types.forEach((type:PokemonTypeInterface) => {
            const key = Object.keys(type)[0];
            type[key][statType].forEach((stat: string) => {
                if(!statsSet.has(stat)) {
                    //@ts-ignore
                    statsArray.push({name: stat, image: pokemonTypes[stat].image})
                    statsSet.add(stat)
                }
            })
            
        })
        return statsArray
    }
    const getStats = () => {
        const data = createStatsArray(pokemon?.types!, "strength")
        return (
            <>
            <div className="pokemon-types">
                <h4 className='pokemon-type-title'>Strength</h4>
                <div className="pokemon-type-icons">
                    {createStatsArray(pokemon?.types!, "strength").map((stat: {image: string}, i: number) => (
                        <div className='pokemon-type' key={stat.image + i}>
                            <img src={stat.image} alt="stat" 
                            className='pokemon-type-image'/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pokemon-types">
                <h4 className='pokemon-type-title'>Resistance</h4>
                <div className="pokemon-type-icons">
                    {createStatsArray(pokemon?.types!, "resistance").map((stat: {image: string}, i:number) => (
                        <div className='pokemon-type' key={stat.image + i}>
                            <img src={stat.image} alt="stat" 
                            className='pokemon-type-image'/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pokemon-types">
                <h4 className='pokemon-type-title'>Weakness</h4>
                <div className="pokemon-type-icons">
                    {createStatsArray(pokemon?.types!, "weakness").map((stat: {image: string}, i: number) => (
                        <div className='pokemon-type' key={stat.image + i}>
                            <img src={stat.image} alt="stat" 
                            className='pokemon-type-image'/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pokemon-types">
                <h4 className='pokemon-type-title'>Vulnerable</h4>
                <div className="pokemon-type-icons">
                    {createStatsArray(pokemon?.types!, "vulnerable").map((stat: {image: string}, i:number) => (
                        <div className='pokemon-type' key={stat.image + i}>
                            <img src={stat.image} alt="stat" 
                            className='pokemon-type-image'/>
                        </div>
                    ))}
                </div>
            </div>
            </>
        )
    }

    return (
        <div className='compare-container'>
            {
                isEmpty && (
                    <div className='empty'>
                        <button>
                            <FaPlus />
                        </button>
                        <h3>Add Pokemon to Comparison</h3>
                    </div>
                )
            }
            {
                pokemon && <div className='compare-element'>
                    <div className="compare-info">
                        <div className="compare-details">
                            <h3>{pokemon.name}</h3>
                            <img src={pokemon.image} alt={pokemon.name}
                                className="compare-image"
                            />
                        </div>
                        <div className="pokemon-types-container">
                            <div className="pokemon-types">
                                <h4 className='pokemon-type-title'>
                                    Type
                                </h4>
                                <div className="pokemon-type-icons">
                                    {pokemon?.types.map((type: PokemonTypeInterface, i: number) => {
                                        const keys = Object.keys(type)
                                        return (
                                            <div className='pokemon-type' key={i}>
                                                <img src={type[keys[0]].image} alt="type" 
                                                className='pokemon-type-image'/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {getStats()}
                        </div>
                    </div>
                    <div className="compare-action-buttons">
                        <button className='compare-btn'
                        onClick={() => dispatch(addPokemonToList(pokemon))}
                        >
                            Add
                        </button>
                        <button className='compare-btn'
                        onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                            View
                        </button>
                        <button className='compare-btn' 
                        onClick={() => dispatch(removeFromCompare({id: pokemon.id}))}>
                            Remove
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CompareContainer
