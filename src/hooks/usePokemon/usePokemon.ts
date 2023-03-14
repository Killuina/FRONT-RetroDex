import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";
import { loadPokemonActionCreator } from "../../store/features/pokemon/pokemonSlice";
import { UserPokemonList } from "../../store/features/pokemon/types";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { routes } from "../routes";

interface UsePokemon {
  getUserPokemonList: () => void;
}

const {
  pokemon: { pokemonPath },
} = routes;

const { gettingPokemonError } = modalMessages;

const usePokemon = (): UsePokemon => {
  const dispatch = useAppDispatch();
  dispatch(setIsLoadingActionCreator());

  const getUserPokemonList = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`
      );

      if (!response.ok) {
        throw new Error(gettingPokemonError);
      }
      const pokemonList: UserPokemonList = await response.json();

      dispatch(loadPokemonActionCreator(pokemonList));

      dispatch(unsetIsLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  }, [dispatch]);

  return { getUserPokemonList };
};

export default usePokemon;
