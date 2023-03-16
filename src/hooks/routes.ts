interface Paths {
  users: {
    usersPath: string;
    endpoints: {
      login: string;
    };
  };
  pokemon: {
    pokemonPath: string;
    endpoints: {
      deletePokemon: string;
    };
  };
}

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
    },
  },
};
