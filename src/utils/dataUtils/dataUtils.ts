import { routes } from "../../hooks/routes";
import {
  GetPokemonDetailResponse,
  UserPokemonListResponse,
} from "../../hooks/types";
import modalMessages from "../../modals/modalMessages";
import { PokemonDetailProps, PokemonListProps } from "./types";

const {
  pokemon: { pokemonPath },
} = routes;

const { gettingDetailError, gettingPokemonError } = modalMessages;

export const getPokemonListData = async (): Promise<PokemonListProps> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
    );

    if (!response.ok) {
      throw new Error(gettingPokemonError);
    }

    const { pokemon: pokemonList }: UserPokemonListResponse =
      await response.json();

    return { props: { pokemonList, isError: false, errorMessage: "" } };
  } catch (error: unknown) {
    return {
      props: {
        pokemonList: [],
        isError: true,
        errorMessage: `${(error as Error).message}`,
      },
    };
  }
};

export const getPokemonDetailData = async (
  pokemonId: string
): Promise<PokemonDetailProps> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}/${pokemonId}`
    );

    if (!response.ok) {
      throw new Error(gettingDetailError);
    }

    const { pokemon } = (await response.json()) as GetPokemonDetailResponse;

    return {
      props: { pokemon, isError: false, errorMessage: "" },
      revalidate: 10,
    };
  } catch (error: unknown) {
    return {
      props: {
        pokemon: {
          ability: "",
          backupImageUrl: "",
          baseExp: "",
          createdBy: "",
          height: "",
          id: "",
          imageUrl: "",
          name: "",
          types: [],
          weight: "",
        },
        isError: true,
        errorMessage: `${(error as Error).message}`,
      },
      revalidate: 10,
    };
  }
};
