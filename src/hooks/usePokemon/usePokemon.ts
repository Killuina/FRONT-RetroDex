import { useRouter } from "next/router";
import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  addUserPokemonActionCreator,
  deleteUserPokemonActionCreator,
  loadUserPokemonActionCreator,
} from "../../store/features/userPokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { routes } from "../../utils/routes";
import { NewUserPokemonResponse, UserPokemonListResponse } from "../types";
import { showSuccessToast } from "../../modals/modals";
import statusCodes from "../../utils/statusCodes";

interface UsePokemon {
  getAllUsersPokemonList: (filter?: string) => Promise<void>;
  getUserPokemonList: (token: string, filter?: string) => Promise<void>;
  deleteUserPokemon: (userPokemonId: string) => Promise<void>;
  createUserPokemon: (newUserPokemonData: FormData) => Promise<void>;
}

const {
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon, createPokemon, getUserPokemon },
  },
} = routes;

const {
  clientError: { conflict },
} = statusCodes;

const { gettingPokemonError, deletingPokemon, creatingPokemon } = modalMessages;

const usePokemon = (): UsePokemon => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token } = useAppSelector(({ user }) => user);

  const getAllUsersPokemonList = useCallback(
    async (type?: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = type
          ? await fetch(
              `${
                process.env.NEXT_PUBLIC_URL_API
              }${pokemonPath}?${new URLSearchParams({ type })}`
            )
          : await fetch(`${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`);

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
    },
    [dispatch]
  );

  const getUserPokemonList = useCallback(
    async (token: string, type?: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = type
          ? await fetch(
              `${
                process.env.NEXT_PUBLIC_URL_API
              }${pokemonPath}?${new URLSearchParams({ type })}`
            )
          : await fetch(
              `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}${getUserPokemon}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
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
    },
    [dispatch]
  );

  const deleteUserPokemon = async (userPokemonId: string) => {
    try {
      dispatch(setIsLoadingActionCreator());

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

      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsSuccessModalActionCreator(deletingPokemon.sucess));
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  const createUserPokemon = async (newUserPokemonData: FormData) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}${createPokemon}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: newUserPokemonData,
        }
      );

      if (response.status === conflict) {
        throw new Error(creatingPokemon.conflict);
      }

      if (!response.ok) {
        throw new Error(creatingPokemon.error);
      }

      const { pokemon: newUserPokemon }: NewUserPokemonResponse =
        await response.json();

      dispatch(addUserPokemonActionCreator(newUserPokemon));

      dispatch(unsetIsLoadingActionCreator());

      router.push("/your-pokemon");

      showSuccessToast(creatingPokemon.sucess);
    } catch (error) {
      dispatch(setIsErrorModalActionCreator((error as Error).message));

      dispatch(unsetIsLoadingActionCreator());
    }
  };
  return {
    getAllUsersPokemonList,
    getUserPokemonList,
    deleteUserPokemon,
    createUserPokemon,
  };
};

export default usePokemon;
