import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPokemon, UserPokemonList } from "./types";

const initialState: UserPokemonList = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemonList>
    ) => [...payload],
    deleteUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<string>
    ) =>
      currentUserPokemonState.filter(
        (userPokemon) => userPokemon.id !== payload
      ),
    addUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemon>
    ) => [...currentUserPokemonState, payload],
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const {
  loadUserPokemon: loadUserPokemonActionCreator,
  deleteUserPokemon: deleteUserPokemonActionCreator,
  addUserPokemon: addUserPokemonActionCreator,
} = pokemonSlice.actions;
