export interface AppTypeInitialState {
    toasts: string[]
    userInfo: undefined | {email: string}
    currentPokemonTab: string
}

export interface CurrentPokemonType {
    id: number;
    name: string;
    types: PokemonTypeInterface[];
    image: string;
    stats: PokemonStatsType[];
    encounters: string[];
    evolution: {level: number; pokemon: {name: string; url: string}}[];
    pokemonAbilities: {abilities: string[], moves: string[]}
    evolutionLevel: number
}

export interface PokemonTypeInitialState {
    allPokemon: undefined | genericPokemonType[]
    randomPokemons: undefined | generatedPokemonType[]
    compareQueue: generatedPokemonType[]
    userPokemons: UserPokemonsType[]
    currentPokemon: CurrentPokemonType | undefined
}

export interface genericPokemonType {
    name: string
    url: string
}

export interface generatedPokemonType {
    name: string
    id: number
    image: string
    types: PokemonTypeInterface[]
}

export interface PokemonTypeInterface {
    [key: string]: {
        image: string
        resistance: string[]
        strength: string[]
        weakness: string[]
        vulnerable: string[]
    }
}

export interface UserPokemonsType extends generatedPokemonType {
    firebaseId?: string
}

export type PokemonStatType =
    | "vulnerable"
    | "weakness"
    | "strength"
    | "resistance"

export interface PokemonStatsType {
    name: string
    value: string
}
