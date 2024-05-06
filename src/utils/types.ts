export enum PokemonTypes {
  fire = "Fire",
  water = "Water",
  ice = "Ice",
  poison = "Poison",
  fairy = "Fairy",
  grass = "Grass",
  ground = "Ground",
  dragon = "Dragon",
  electric = "Electric",
  bug = "Bug",
  dark = "Dark",
  fighting = "Fighting",
  flying = "Flying",
  ghost = "Ghost",
  psychic = "Psychic",
  rock = "Rock",
  steel = "Steel",
  normal = "Normal",
}

export interface Routes {
  users: {
    usersPath: string;
    endpoints: {
      login: string;
      register: string;
    };
  };
  pokemon: {
    pokemonPath: string;
    endpoints: {
      getUserPokemon: string;
      deletePokemon: string;
      createPokemon: string;
    };
  };
}

export interface StatusCodes {
  clientError: {
    conflict: number;
    notFound: number;
    badRequest: number;
    unauthorized: number;
    gone: number;
    forbbiden: number;
  };
  serverError: {
    internalServer: number;
  };
  success: { okCode: number; resourceCreated: number };
}
