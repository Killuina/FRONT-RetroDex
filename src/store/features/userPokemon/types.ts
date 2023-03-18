export interface UserPokemon {
  id: string;
  name: string;
  types: string[];
  ability: string;
  height: number;
  weight: number;
  baseExp: number;
  imageUrl: string;
  backupImageUrl: string;
  createdBy: string;
}

export type UserPokemonList = UserPokemon[];
