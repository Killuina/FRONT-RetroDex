import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPokemons } from "./types";

const initialState: UserPokemons = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadPokemon: (
      currentPokemonState,
      { payload }: PayloadAction<UserPokemons>
    ) => [...payload],
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const { loadPokemon: loadPokemonActionCreator } = pokemonSlice.actions;
