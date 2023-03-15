import { routes } from "../hooks/routes";
import { UserPokemonListResponse } from "../hooks/types";
import modalMessages from "../modals/modalMessages";
import { loadUserPokemonActionCreator } from "../store/features/userPokemon/pokemonSlice";
import { store } from "../store/store";
import { GetUserPokemonList } from "./types";

const {
  pokemon: { pokemonPath },
} = routes;

const { gettingPokemonError } = modalMessages;

const getUserPokemonList = async (): Promise<GetUserPokemonList> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
    );

    if (!response.ok) {
      throw new Error(gettingPokemonError);
    }

    const { pokemon: userPokemonList }: UserPokemonListResponse =
      await response.json();

    return { props: { userPokemonList, isError: false, errorMessage: "" } };
  } catch (error: unknown) {
    return {
      props: {
        userPokemonList: [],
        isError: true,
        errorMessage: `${(error as Error).message}`,
      },
    };
  }
};

export default getUserPokemonList;
