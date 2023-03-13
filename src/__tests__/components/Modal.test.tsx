import Modal from "../../components/Modal/Modal";
import { mockErrorUiState } from "../../mocks/storeMocks/storeMocks";
import { showErrorToast } from "../../modals/modals";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("../../modals/modals", () => ({
  showErrorToast: jest.fn(),
}));

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Modal component", () => {
  describe("When it renders with an error and the message 'Invalid Credentials'", () => {
    test("Then it should call showErrorToast component with that error message", () => {
      const expectedMessage = "Invalid credentials";

      renderWithProviders(<Modal />, { ui: mockErrorUiState });

      expect(showErrorToast).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
