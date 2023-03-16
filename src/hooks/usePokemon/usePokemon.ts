import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";

import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { loadUserPokemonActionCreator } from "../../store/features/userPokemon/pokemonSlice";
import { useAppDispatch } from "../../store/hooks";
import { routes } from "../routes";
import { UserPokemonListResponse } from "../types";

interface UsePokemon {
  getUserPokemonList: () => void;
}

const {
  pokemon: { pokemonPath },
} = routes;

const { gettingPokemonError } = modalMessages;

const usePokemon = (): UsePokemon => {
  const dispatch = useAppDispatch();

  const getUserPokemonList = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
      );

      if (!response.ok) {
        throw new Error(gettingPokemonError);
      }
      const { pokemon: pokemonList }: UserPokemonListResponse =
        await response.json();

      dispatch(loadUserPokemonActionCreator(pokemonList));

      dispatch(unsetIsLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  }, [dispatch]);

  return { getUserPokemonList };
};

export default usePokemon;
