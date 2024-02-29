import { Paths } from "./types";

export const routes: Paths = {
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
      deletePokemon: "/delete/",
      createPokemon: "/create",
    },
  },
};
