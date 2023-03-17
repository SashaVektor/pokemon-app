import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { PokemonStatsType, PokemonTypeInterface, UserPokemonsType } from "../../utils/Types";
import { setToast } from "../slices/AppSlice";
import { RootState } from "../store";
import { getUserPokemons } from "./getUserPokemons";

export const addPokemonToList = createAsyncThunk("pokemon/addPokemon",
    async (pokemon:
        { id: number; name: string; types: PokemonTypeInterface[] | string[]; stats?: PokemonStatsType[] },
        { getState, dispatch }
    ) => {
        try {
            const { app: { userInfo }, pokemon: { userPokemons } } = getState() as RootState
            if (!userInfo?.email) {
                return dispatch(setToast("Please, loggin in order to add pokemon to your collection"))
            }
            const index = userPokemons.findIndex((userPokemon: UserPokemonsType) =>
                userPokemon.name === pokemon.name)
            if (index === -1) {
                let types: string[] = [];
                if(!pokemon.stats) {
                    pokemon.types.forEach((type: any) => types.push(Object.keys(type).toString()))
                } else {
                    types = pokemon.types as string[]
                }
                await addDoc(pokemonListRef, {
                    pokemon: { id: pokemon.id, name: pokemon.name, types },
                    email: userInfo.email
                })
                await dispatch(getUserPokemons())
                return dispatch(setToast(`${pokemon.name} added to your list`))
            } else {
                return dispatch(setToast(`${pokemon.name} already part of your list`))
            }
        } catch (err) {
            console.log(err);
        }
    }
)