import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When the user writes on name's field", () => {
    test("Then it should change the value of name's field", async () => {
      const nameLabel = "Name";
      const expectedFieldValue = "manolo";
      renderWithProviders(<CreatePokemonForm />);

      const nameField = screen.getByLabelText(nameLabel);

      await waitFor(
        async () => await userEvent.type(nameField, expectedFieldValue)
      );

      expect(nameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on name's field", () => {
    test("Then it should change the value of name's field", async () => {
      const nameLabel = "Name";
      const expectedFieldValue = "manolo";
      renderWithProviders(<CreatePokemonForm />);

      const nameField = screen.getByLabelText(nameLabel);

      await waitFor(
        async () => await userEvent.type(nameField, expectedFieldValue)
      );

      expect(nameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on ability's field", () => {
    test("Then it should change the value of ability's field", async () => {
      const abilityLabel = "Ability";
      const expectedFieldValue = "Pesao";
      renderWithProviders(<CreatePokemonForm />);

      const abilityField = screen.getByLabelText(abilityLabel);

      await waitFor(
        async () => await userEvent.type(abilityField, expectedFieldValue)
      );

      expect(abilityField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on height's field", () => {
    test("Then it should change the value of height's field", async () => {
      const heightLabel = "Height";
      const expectedFieldValue = "23";
      renderWithProviders(<CreatePokemonForm />);

      const heightField = screen.getByLabelText(heightLabel);

      await waitFor(
        async () => await userEvent.type(heightField, expectedFieldValue)
      );

      expect(heightField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on weight's field", () => {
    test("Then it should change the value of weight's field", async () => {
      const weightLabel = "Weight";
      const expectedFieldValue = "145";
      renderWithProviders(<CreatePokemonForm />);

      const weightField = screen.getByLabelText(weightLabel);

      await waitFor(
        async () => await userEvent.type(weightField, expectedFieldValue)
      );

      expect(weightField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on base exp's field", () => {
    test("Then it should change the value of base exp's field", async () => {
      const baseExpLabel = "Base exp";
      const expectedFieldValue = "200";
      renderWithProviders(<CreatePokemonForm />);

      const baseExpField = screen.getByLabelText(baseExpLabel);

      await waitFor(
        async () => await userEvent.type(baseExpField, expectedFieldValue)
      );

      expect(baseExpField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user ataches a file 'pokemon.png' on image input", () => {
    test("Then it should change the value of image's field", async () => {
      const inputLabel = "Image";

      renderWithProviders(<CreatePokemonForm />);

      const testFile = new File(["pokemon"], "pokemon.png", {
        type: "image/png",
      });

      const imageInput: HTMLInputElement = screen.getByLabelText(inputLabel);

      fireEvent.change(imageInput, { target: { files: [testFile] } });

      expect(imageInput.files![0]).toStrictEqual(testFile);
    });
  });
});
