import { screen } from "@testing-library/react";
import CreatePokemonForm from "../../components/CreatePokemonForm/CreatePokemonForm";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the CreatePokemonForm component", () => {
  describe("When it renders", () => {
    test("Then is should show a field with label 'Name'", () => {
      const expectedLabel = "Name";
      renderWithProviders(<CreatePokemonForm />);

      const nameField = screen.getByLabelText(expectedLabel);

      expect(nameField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'First type'", () => {
      const expectedLabel = "First type";
      renderWithProviders(<CreatePokemonForm />);

      const firstTypeField = screen.getByLabelText(expectedLabel);

      expect(firstTypeField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'second type'", () => {
      const expectedLabel = "Second type";
      renderWithProviders(<CreatePokemonForm />);

      const secondTypeField = screen.getByLabelText(expectedLabel);

      expect(secondTypeField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Ability'", () => {
      const expectedLabel = "Ability";
      renderWithProviders(<CreatePokemonForm />);

      const abilityField = screen.getByLabelText(expectedLabel);

      expect(abilityField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Height'", () => {
      const expectedLabel = "Height";
      renderWithProviders(<CreatePokemonForm />);

      const heightField = screen.getByLabelText(expectedLabel);

      expect(heightField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Weight'", () => {
      const expectedLabel = "Weight";
      renderWithProviders(<CreatePokemonForm />);

      const weightField = screen.getByLabelText(expectedLabel);

      expect(weightField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Base exp'", () => {
      const expectedLabel = "Base exp";
      renderWithProviders(<CreatePokemonForm />);

      const baseExpField = screen.getByLabelText(expectedLabel);

      expect(baseExpField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Image'", () => {
      const expectedLabel = "Image";
      renderWithProviders(<CreatePokemonForm />);

      const imageField = screen.getByLabelText(expectedLabel);

      expect(imageField).toBeInTheDocument();
    });

    test("Then is should show a button with text 'Create Pokémon'", () => {
      const expectedText = "Create Pokémon";
      renderWithProviders(<CreatePokemonForm />);

      const createPokemonButton = screen.getByRole("button", {
        name: expectedText,
      });

      expect(createPokemonButton).toBeInTheDocument();
    });
  });
});
