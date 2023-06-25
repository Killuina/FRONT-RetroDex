import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import { mockUserPokemon } from "../../mocks/pokemonMocks/pokemonMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const testImage = new File(["test"], "test.png", {
  type: "image/png",
});

window.URL.createObjectURL = jest
  .fn()
  .mockReturnValue(
    "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/1679248054259-image.webp"
  );

const mockedCreateUserPokemon = jest.fn();

jest.mock("../../hooks/usePokemon/usePokemon", () => () => ({
  createUserPokemon: mockedCreateUserPokemon,
}));

describe("Given the CreatePokemonForm component", () => {
  describe("When it renders", () => {
    test("Then is should show a field with label 'Name'", () => {
      const expectedLabel = "Name";
      renderWithProviders(<PokemonForm />);

      const nameField = screen.getByLabelText(expectedLabel);

      expect(nameField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'First type'", () => {
      const expectedLabel = "First type";
      renderWithProviders(<PokemonForm />);

      const firstTypeField = screen.getByLabelText(expectedLabel);

      expect(firstTypeField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'second type'", () => {
      const expectedLabel = "Second type";
      renderWithProviders(<PokemonForm />);

      const secondTypeField = screen.getByLabelText(expectedLabel);

      expect(secondTypeField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Ability'", () => {
      const expectedLabel = "Ability";
      renderWithProviders(<PokemonForm />);

      const abilityField = screen.getByLabelText(expectedLabel);

      expect(abilityField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Height'", () => {
      const expectedLabel = "Height";
      renderWithProviders(<PokemonForm />);

      const heightField = screen.getByLabelText(expectedLabel);

      expect(heightField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Weight'", () => {
      const expectedLabel = "Weight";
      renderWithProviders(<PokemonForm />);

      const weightField = screen.getByLabelText(expectedLabel);

      expect(weightField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Base exp'", () => {
      const expectedLabel = "Base exp";
      renderWithProviders(<PokemonForm />);

      const baseExpField = screen.getByLabelText(expectedLabel);

      expect(baseExpField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Image'", () => {
      const expectedLabel = "Image";
      renderWithProviders(<PokemonForm />);

      const imageField = screen.getByLabelText(expectedLabel);

      expect(imageField).toBeInTheDocument();
    });

    test("Then is should show a button with text 'Create Pokémon'", () => {
      const expectedText = "Create Pokémon";
      renderWithProviders(<PokemonForm />);

      const createPokemonButton = screen.getByRole("button", {
        name: expectedText,
      });

      expect(createPokemonButton).toBeInTheDocument();
    });
  });

  describe("When the user writes 'Pokamion' on name's field", () => {
    test("Then it should change the value of name's field to 'Pokamion'", async () => {
      const nameLabel = "Name";
      const expectedFieldValue = "Pokamion";
      renderWithProviders(<PokemonForm />);

      const nameField = screen.getByLabelText(nameLabel);

      await waitFor(
        async () => await userEvent.type(nameField, expectedFieldValue)
      );

      expect(nameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user selects 'Fairy' option on First Type input", () => {
    test("Then it should change the value of First type's field to 'Fairy'", async () => {
      const firstTypeLabel = "First type";
      const expectedFieldValue = "Fairy";
      renderWithProviders(<PokemonForm />);

      const firstTypeField: HTMLSelectElement =
        screen.getByLabelText(firstTypeLabel);

      await userEvent.selectOptions(firstTypeField, expectedFieldValue);

      expect(firstTypeField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user selects 'Ground' option on Second Type input", () => {
    test("Then it should change the value of Second type's field to 'Ground'", async () => {
      const secondTypeLabel = "Second type";
      const expectedFieldValue = "Ground";
      renderWithProviders(<PokemonForm />);

      const secondTypeField: HTMLSelectElement =
        screen.getByLabelText(secondTypeLabel);

      await userEvent.selectOptions(secondTypeField, expectedFieldValue);

      expect(secondTypeField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes 'Pesao' on ability's field", () => {
    test("Then it should change the value of ability's field to 'Pesao'", async () => {
      const abilityLabel = "Ability";
      const expectedFieldValue = "Pesao";
      renderWithProviders(<PokemonForm />);

      const abilityField = screen.getByLabelText(abilityLabel);

      await waitFor(
        async () => await userEvent.type(abilityField, expectedFieldValue)
      );

      expect(abilityField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes 23 on height's field", () => {
    test("Then it should change the value of height's field to 23", async () => {
      const heightLabel = "Height";
      const expectedFieldValue = "23";
      renderWithProviders(<PokemonForm />);

      const heightField = screen.getByLabelText(heightLabel);

      await waitFor(
        async () => await userEvent.type(heightField, expectedFieldValue)
      );

      expect(heightField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes 145 on weight's field", () => {
    test("Then it should change the value of weight's field to 145", async () => {
      const weightLabel = "Weight";
      const expectedFieldValue = "145";
      renderWithProviders(<PokemonForm />);

      const weightField = screen.getByLabelText(weightLabel);

      await waitFor(
        async () => await userEvent.type(weightField, expectedFieldValue)
      );

      expect(weightField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes 200 on base exp's field", () => {
    test("Then it should change the value of base exp's field to 200", async () => {
      const baseExpLabel = "Base exp";
      const expectedFieldValue = "200";
      renderWithProviders(<PokemonForm />);

      const baseExpField = screen.getByLabelText(baseExpLabel);

      await waitFor(
        async () => await userEvent.type(baseExpField, expectedFieldValue)
      );

      expect(baseExpField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user enters all data necessary to create a pokémon", () => {
    test("Then it should call the createUserPokemon function and redirect to your pokemon page", async () => {
      const nameLabel = "Name";
      const firstTypeLabel = "First type";
      const secondTypeLabel = "Second type";
      const abilityLabel = "Ability";
      const heightLabel = "Height";
      const weightLabel = "Weight";
      const baseExpLabel = "Base exp";
      const imageLabel = "Image";
      const buttonText = "Create Pokémon";

      renderWithProviders(<PokemonForm />);

      const nameField = screen.getByLabelText(nameLabel);
      const firstTypeField = screen.getByLabelText(firstTypeLabel);
      const secondTypeField = screen.getByLabelText(secondTypeLabel);
      const abilityField = screen.getByLabelText(abilityLabel);
      const heightField = screen.getByLabelText(heightLabel);
      const weightField = screen.getByLabelText(weightLabel);
      const baseExpField = screen.getByLabelText(baseExpLabel);
      const imageField = screen.getByLabelText(imageLabel);
      const createPokemonButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.type(nameField, mockUserPokemon.name);
      await userEvent.selectOptions(firstTypeField, mockUserPokemon.types[0]);
      await userEvent.selectOptions(secondTypeField, mockUserPokemon.types[1]);
      await userEvent.type(abilityField, mockUserPokemon.ability);
      await userEvent.type(heightField, mockUserPokemon.height);
      await userEvent.type(weightField, mockUserPokemon.weight);
      await userEvent.type(baseExpField, mockUserPokemon.baseExp);
      await userEvent.upload(imageField, testImage);
      await userEvent.click(createPokemonButton);

      expect(mockedCreateUserPokemon).toHaveBeenCalled();
    });
  });
});
