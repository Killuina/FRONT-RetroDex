import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";

export interface PokemonListProps {
  props: {
    pokemonList: UserPokemonList;
    isError: boolean;
    errorMessage: string;
  };
}

export interface PokemonDetailProps {
  props: PokemonDetailPageProps;
  revalidate: number;
}

export interface PokemonDetailPageProps {
  pokemon: UserPokemon;
  isError: boolean;
  errorMessage: string;
}
