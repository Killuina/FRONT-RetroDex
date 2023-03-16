import { renderHook } from "@testing-library/react";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { loadUserPokemonActionCreator } from "../../store/features/userPokemon/pokemonSlice";
import wrapper from "../../utils/testUtils/Wrapper";
import modalMessages from "../../modals/modalMessages";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

jest.mock("next/router", () => require("next-router-mock"));

beforeEach(() => jest.resetAllMocks());

const { gettingPokemonError } = modalMessages;

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
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action to activate the error modal with message 'Error getting Pokémon'", async () => {
      const {
        result: {
          current: { getUserPokemonList },
        },
      } = renderHook(() => usePokemon(), {
        wrapper,
      });

      const setIsErrorModal = setIsErrorModalActionCreator(gettingPokemonError);

      await getUserPokemonList();

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorModal);
    });
  });
});
