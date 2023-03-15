import { screen } from "@testing-library/react";
import UserPokemonListPage from "../../pages/your-pokemon";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given the UserPokemonPage component", () => {
  describe("When rendered", () => {
    test("Then it should shoy the page title 'Your Pokémon' on a heading", () => {
      const expectedTitle = "Your Pokémon";

      renderWithProviders(
        <UserPokemonListPage errorMessage="" isError userPokemonList={[]} />
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
