import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../../components/Filter/Filter";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import { addFilterActionCreator } from "../../store/features/userPokemon/pokemonSlice";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

beforeEach(() => jest.clearAllMocks());

describe("Given the filter component", () => {
  describe("When it renders", () => {
    test("Then it should have 19 options, as there are 18 types to filter by, and the default value: 'View All'", () => {
      const expectedNumberOfOptions = 19;

      renderWithProviders(<Filter />);

      const selectOptions = screen.getAllByRole("option");

      expect(selectOptions).toHaveLength(expectedNumberOfOptions);
    });
  });

  describe("When the user selects option 'Ghost'", () => {
    test("Then it should call dispatch with addFilterAction with that filter value as payload", async () => {
      const expectedFilterLabel = "Filter by type";
      const expectedFilterValue = "Ghost";
      const addFilterAction = addFilterActionCreator(expectedFilterValue);

      renderWithProviders(<Filter />);

      const filter = screen.getByLabelText(expectedFilterLabel);

      await userEvent.selectOptions(filter, expectedFilterValue);

      expect(spyDispatch).toHaveBeenCalledWith(addFilterAction);
    });
  });
});
