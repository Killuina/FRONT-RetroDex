import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPokemonList } from "./types";

const initialState: UserPokemonList = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadPokemon: (
      currentPokemonState,
      { payload }: PayloadAction<UserPokemonList>
    ) => [...payload],
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const { loadPokemon: loadPokemonActionCreator } = pokemonSlice.actions;
