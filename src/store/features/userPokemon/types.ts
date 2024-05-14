export interface UserPokemon {
  id: string;
  name: string;
  firstType: string;
  secondType: string;
  ability: string;
  height: string;
  weight: string;
  baseExp: string;
  imageUrl: string;
  backupImageUrl: string;
  createdBy: {
    username: string;
    id: string;
  };
}

export type UserPokemonList = UserPokemon[];

export interface UserPokemonState {
  pokemonList: UserPokemonList;
  filter: string;
}
