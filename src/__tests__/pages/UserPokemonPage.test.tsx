import { screen } from "@testing-library/react";
import UserPokemonListPage from "../../pages/your-pokemon";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the UserPokemonPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Your Pokémon' on a heading", () => {
      const expectedTitle = "Your Pokémon";

      renderWithProviders(
        <UserPokemonListPage userPokemonList={[]} isError errorMessage="" />
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
