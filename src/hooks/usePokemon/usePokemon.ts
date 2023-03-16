import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";

import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  deleteUserPokemonActionCreator,
  loadUserPokemonActionCreator,
} from "../../store/features/userPokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { routes } from "../routes";
import { UserPokemonListResponse } from "../types";

interface UsePokemon {
  getUserPokemonList: () => void;
  deleteUserPokemon: (userPokemonId: string) => void;
}

const {
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon },
  },
} = routes;

const { gettingPokemonError, deletingPokemon } = modalMessages;

const usePokemon = (): UsePokemon => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(({ user }) => user);

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

  const deleteUserPokemon = async (userPokemonId: string) => {
    try {
      const response = await fetch(
        `${process.env
          .NEXT_PUBLIC_URL_API!}${pokemonPath}${deletePokemon}${userPokemonId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(deletingPokemon.error);
      }

      dispatch(deleteUserPokemonActionCreator(userPokemonId));
    } catch (error: unknown) {
      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  return { getUserPokemonList, deleteUserPokemon };
};

export default usePokemon;
