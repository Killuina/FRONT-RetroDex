import { screen } from "@testing-library/react";
import CreatePokemonPage from "../../pages/create";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the CreatePokemon component", () => {
  describe("When rendered", () => {
    test("Then it should render the page title 'Create your Pokémon' on a heading", () => {
      const expectedCreatePokemonTitle = "Create your Pokémon";

      renderWithProviders(<CreatePokemonPage />);

      const CreatePokemonTitle = screen.getByRole("heading", {
        name: expectedCreatePokemonTitle,
      });

      expect(CreatePokemonTitle).toBeInTheDocument();
    });
  });

  test("Then it should show create pokemon form, including its button", () => {
    const createPokemonFormButtonText = "Create Pokémon";

    renderWithProviders(<CreatePokemonPage />);

    const createPokemoFormButton = screen.getByRole("button", {
      name: createPokemonFormButtonText,
    });

    expect(createPokemoFormButton).toBeInTheDocument();
  });
});
