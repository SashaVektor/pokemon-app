import { createSlice } from "@reduxjs/toolkit";
import { pokemonTabs } from "../../utils/constants";
import { AppTypeInitialState } from "../../utils/Types";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo: undefined,
    currentPokemonTab: pokemonTabs.description
}

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setToast: (state, action) => {
            const toasts = [...state.toasts]
            toasts.push(action.payload)
            state.toasts = toasts
        },
        clearToasts: (state) => {
            state.toasts = []
        },
        setUserStatus: (state, action) => {
            state.userInfo = action.payload
        },
        setPokemonType: (state, action) => {
            state.currentPokemonTab = action.payload
        }
    }
})

export const {setToast, clearToasts, setUserStatus, setPokemonType} = AppSlice.actions

export default AppSlice.reducer