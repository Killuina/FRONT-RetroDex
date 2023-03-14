import { UserPokemonList } from "../store/features/userPokemon/types";

export interface getUserPokemonList {
  props: UserPokemonListPageProps;
}

export interface UserPokemonListPageProps {
  userPokemonList: UserPokemonList;
  isError: boolean;
  errorMessage: string;
}
