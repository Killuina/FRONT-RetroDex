import { UiState } from "../../src/store/features/uiSlice/types";
import {
  setIsErrorActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsErrorActionCreator,
  unsetIsLoadingActionCreator,
} from "../../src/store/features/uiSlice/uiSlice";

const currentUiState: UiState = {
  isError: false,
  isSuccess: false,
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

  describe("When it receives the action to set isError", () => {
    test("Then it should set isError to true", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        setIsErrorActionCreator()
      );

      expect(uiState).toHaveProperty("isError", true);
    });
  });

  describe("When it receives the action to unset isError", () => {
    test("Then it should set isError to false", () => {
      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsErrorActionCreator()
      );

      expect(uiState).toHaveProperty("isError", false);
    });
  });
});
