import { Paths } from "./types";

export const routes: Paths = {
  users: {
    usersPath: "/users",
    endpoints: {
      login: "/login",
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
