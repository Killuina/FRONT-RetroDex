import { screen, waitFor } from "@testing-library/react";
import { ClientRequest } from "http";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import { mockWithTokenUserState } from "../../mocks/storeMocks/storeMocks";
import UserPokemonListPage from "../../pages/your-pokemon";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the UserPokemonPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Your Pokémon' on a heading", () => {
      const expectedTitle = "Your Pokémon";

      window.localStorage.setItem("token", "mocken");

      renderWithProviders(<UserPokemonListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
