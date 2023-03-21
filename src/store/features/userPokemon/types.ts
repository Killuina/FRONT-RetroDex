export interface UserPokemon {
  id: string;
  name: string;
  types: string[];
  ability: string;
  height: string;
  weight: string;
  baseExp: string;
  imageUrl: string;
  backupImageUrl: string;
  createdBy: string;
}

export type UserPokemonList = UserPokemon[];

export interface UserPokemonState {
  pokemonList: UserPokemonList;
  filter: string;
  totalPokemon: number;
}

export type UserPokemonListState = Pick<
  UserPokemonState,
  "pokemonList" | "totalPokemon"
>;
