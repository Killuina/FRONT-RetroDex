import { renderHook } from "@testing-library/react";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import {
  getMockNewUserPokemonData,
  mockUserPokemon,
  mockUserPokemonList,
} from "../../mocks/pokemonMocks/pokemonMock";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import {
  setIsErrorModalActionCreator,
  setIsSuccessModalActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  addUserPokemonActionCreator,
  deleteUserPokemonActionCreator,
  loadUserPokemonActionCreator,
} from "../../store/features/userPokemon/pokemonSlice";
import wrapper from "../../utils/testUtils/Wrapper";
import modalMessages from "../../modals/modalMessages";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

jest.mock("next/router", () => require("next-router-mock"));

beforeEach(() => jest.resetAllMocks());

const { gettingPokemonError, deletingPokemon, creatingPokemon } = modalMessages;

describe("Given the usePokemon custom hook", () => {
  describe("When the getUserPokemonList is called", () => {
    test("Then it should call the dispatch with loadPokemonAction", async () => {
      const {
        result: {
          current: { getUserPokemonList },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const loadUserPokemonAction =
        loadUserPokemonActionCreator(mockUserPokemonList);

      await getUserPokemonList();

      expect(spyDispatch).toHaveBeenCalledWith(loadUserPokemonAction);
    });
  });

  describe("When the getUserPokemonList is called and request to get user's pokemon fails", () => {
    test("Then the dispatch should be called with the action to activate the error modal with message 'Error getting Pokémon'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserPokemonList },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const setIsErrorModalAction =
        setIsErrorModalActionCreator(gettingPokemonError);

      await getUserPokemonList();

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorModalAction);
    });
  });
});

describe("Given a deletePokemon function", () => {
  describe("When it is called and the fetching is ok", () => {
    test("Then it should call dispatch with delete pokemon action", async () => {
      const {
        result: {
          current: { deleteUserPokemon },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const deleteUserPokemonAction = deleteUserPokemonActionCreator(
        mockUserPokemonList[0].id
      );

      await deleteUserPokemon(mockUserPokemonList[0].id);

      expect(spyDispatch).toHaveBeenCalledWith(deleteUserPokemonAction);
    });

    test("Then it should call dispatch with set is sucess modal action with 'Pokemon deleted!' message", async () => {
      const {
        result: {
          current: { deleteUserPokemon },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const setIsSuccessModalAction = setIsSuccessModalActionCreator(
        deletingPokemon.sucess
      );

      await deleteUserPokemon(mockUserPokemonList[0].id);

      expect(spyDispatch).toHaveBeenCalledWith(setIsSuccessModalAction);
    });
  });

  describe("When it is called to delete a Pokemon but receives an error instead", () => {
    test("Then it should call dispatch with set error modal action with 'Error deleting pokémon' message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteUserPokemon },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const setIsErrorModalAction = setIsErrorModalActionCreator(
        deletingPokemon.error
      );

      await deleteUserPokemon(mockUserPokemonList[0].id);

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorModalAction);
    });
  });
});

describe("Given the createUserPokemon function", () => {
  describe("When it is called and the fetching is ok", () => {
    test("Then it should call dispatch with add new user pokemon action, and all the new pokemon data on the payload", async () => {
      const {
        result: {
          current: { createUserPokemon },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const mockNewUserPokemonData = getMockNewUserPokemonData();

      const addUserPokemonAction = addUserPokemonActionCreator(mockUserPokemon);

      await createUserPokemon(mockNewUserPokemonData as unknown as FormData);

      expect(spyDispatch).toHaveBeenCalledWith(addUserPokemonAction);
    });
  });
  test("Then it should call dispatch with set is sucess modal action with 'Pokemon created!' message", async () => {
    const {
      result: {
        current: { createUserPokemon },
      },
    } = renderHook(() => usePokemon(), {
      wrapper,
    });

    const mockNewUserPokemonData = getMockNewUserPokemonData();

    const setIsSuccessModalAction = setIsSuccessModalActionCreator(
      creatingPokemon.sucess
    );

    await createUserPokemon(mockNewUserPokemonData as unknown as FormData);

    expect(spyDispatch).toHaveBeenCalledWith(setIsSuccessModalAction);
  });
});

describe("When it is called to create a Pokemon but receives an error instead", () => {
  test("Then it should call dispatch with set error modal action with 'Error creating pokémon' message", async () => {
    server.resetHandlers(...errorHandlers);

    const {
      result: {
        current: { createUserPokemon },
      },
    } = renderHook(() => usePokemon(), {
      wrapper,
    });

    const mockNewUserPokemonData = getMockNewUserPokemonData();

    const setIsErrorModalAction = setIsErrorModalActionCreator(
      creatingPokemon.error
    );

    await createUserPokemon(mockNewUserPokemonData as unknown as FormData);

    expect(spyDispatch).toHaveBeenCalledWith(setIsErrorModalAction);
  });
});
