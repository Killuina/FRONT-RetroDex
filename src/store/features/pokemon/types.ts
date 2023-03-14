export interface UserPokemon {
  id: string;
  name: string;
  types: string[];
  ability: string;
  height: number;
  weight: number;
  baseExp: number;
  imageUrl: string;
}

export type UserPokemons = UserPokemon[];
