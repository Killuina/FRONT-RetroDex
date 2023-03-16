import Modal from "../../components/Modal/Modal";
import {
  mockErrorUiState,
  mockSucessUiState,
} from "../../mocks/storeMocks/storeMocks";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("../../modals/modals", () => ({
  showErrorToast: jest.fn(),
  showSuccessToast: jest.fn(),
}));

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Modal component", () => {
  describe("When it renders with an error and the message 'Error!'", () => {
    test("Then it should call showErrorToast component with that error message", () => {
      const expectedMessage = mockErrorUiState.modal.message;

      renderWithProviders(<Modal />, { ui: mockErrorUiState });

      expect(showErrorToast).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it renders with a success and the message 'Success!'", () => {
    test("Then it should call showErrorToast component with that error message", () => {
      const expectedMessage = mockSucessUiState.modal.message;

      renderWithProviders(<Modal />, { ui: mockSucessUiState });

      expect(showSuccessToast).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
