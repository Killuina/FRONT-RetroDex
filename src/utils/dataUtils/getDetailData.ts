import { routes } from "../../hooks/routes";
import {
  GetPokemonDetailResponse,
  UserPokemonListResponse,
} from "../../hooks/types";
import modalMessages from "../../modals/modalMessages";
import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";

const {
  pokemon: { pokemonPath },
} = routes;

const { gettingDetailError, gettingPokemonError } = modalMessages;

export const getPokemonListData = async (): Promise<UserPokemonList> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
  );

  if (!response.ok) {
    throw new Error(gettingPokemonError);
  }

  const { pokemon: pokemonList }: UserPokemonListResponse =
    await response.json();

  return pokemonList;
};

export const getPokemonDetailData = async (
  pokemonId: string
): Promise<UserPokemon> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}/${pokemonId}`
  );

  if (!response.ok) {
    throw new Error(gettingDetailError);
  }

  const { pokemon } = (await response.json()) as GetPokemonDetailResponse;

  return pokemon;
};
