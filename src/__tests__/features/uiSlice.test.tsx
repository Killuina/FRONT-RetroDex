import { UiState } from "../../store/features/ui/types";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

const currentUiState: UiState = {
  modal: { isError: false, message: "" },
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
        modal: { isError: true, message: errorMessage },
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
      const expectedUiState: UiState = {
        modal: { isError: false, message: "" },
        isLoading: false,
      };

      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsErrorModalActionCreator()
      );

      expect(uiState).toStrictEqual(expectedUiState);
    });
  });
});
