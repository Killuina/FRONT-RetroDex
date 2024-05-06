import { Routes } from "./types";

export const routes: Routes = {
  users: {
    usersPath: "/users",
    endpoints: {
      login: "/login",
      register: "/register",
    },
  },
  pokemon: {
    pokemonPath: "/pokemon",
    endpoints: {
      getUserPokemon: "/user",
      deletePokemon: "/delete/",
      createPokemon: "/create",
    },
  },
};
