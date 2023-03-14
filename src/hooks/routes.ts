interface Paths {
  users: {
    usersPath: string;
    endpoints: {
      login: string;
    };
  };
  pokemon: {
    pokemonPath: string;
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
  },
};
