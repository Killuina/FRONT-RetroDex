import { UiState } from "../../store/features/ui/types";
import {
  initialState,
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  uiReducer,
  unsetIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
  unsetIsSuccessModalActionCreator,
} from "../../store/features/ui/uiSlice";

const currentUiState: UiState = {
  modal: { isSuccess: false, isError: false, message: "" },
  isLoading: false,
};

describe("Given the uiSliceReducer reducer", () => {
  describe("When it receives the action to set isLoading", () => {
    test("Then it should set isLoading to true", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        setIsLoadingActionCreator()
      );
      8;
      expect(uiState).toHaveProperty("isLoading", true);
    });
  });

  describe("When it receives the action to unset isLoading", () => {
    test("Then it should set isLoading to false", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsLoadingActionCreator()
      );

      expect(uiState).toHaveProperty("isLoading", false);
    });
  });

  describe("When it receives the action to set isError and 'This is an error message' message", () => {
    test("Then it should set modal's isError property to true and message to 'This is an error message'", () => {
      const errorMessage = "This is an error message";
      const expectedUiState: UiState = {
        modal: { isSuccess: false, isError: true, message: errorMessage },
        isLoading: false,
      };

      const uiState: UiState = uiReducer(
        currentUiState,
        setIsErrorModalActionCreator(errorMessage)
      );

      expect(uiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the action to unset isError", () => {
    test("Then it should set modal to its initial state", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsErrorModalActionCreator()
      );

      expect(uiState).toStrictEqual(initialState);
    });
  });

  describe("When it receives the action to set isSucess and 'This is an success message' message", () => {
    test("Then it should set modal's isSuccess property to true and message to 'This is an success message'", () => {
      const successMessage = "This is an success message";
      const expectedUiState: UiState = {
        modal: { isSuccess: true, isError: false, message: successMessage },
        isLoading: false,
      };

      const uiState: UiState = uiReducer(
        currentUiState,
        setIsSuccessModalActionCreator(successMessage)
      );

      expect(uiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the action to unset isSucess", () => {
    test("Then it should set modal to its initial state", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsSuccessModalActionCreator()
      );

      expect(uiState).toStrictEqual(initialState);
    });
  });
});
