import { routes } from "../hooks/routes";
import { UserPokemonListResponse } from "../hooks/types";
import { UserPokemonList } from "../store/features/userPokemon/types";

const {
  pokemon: { pokemonPath },
} = routes;

const getUserPokemonList = async (): Promise<UserPokemonList | undefined> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
  );

  const { pokemon: pokemonList }: UserPokemonListResponse =
    await response.json();
  return pokemonList;
};

export default getUserPokemonList;
