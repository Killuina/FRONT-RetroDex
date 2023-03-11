import { UiState } from "../../src/store/features/uiSlice/types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "../../src/store/features/uiSlice/uiSlice";

describe("Given the uiSliceReducer reducer", () => {
  describe("When it receives the action to set isLoading", () => {
    test("Then it should set isLoading to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
      };

      const expectedUiState: UiState = {
        isLoading: true,
      };

      const uiState: UiState = uiReducer(
        currentUiState,
        setIsLoadingActionCreator()
      );

      expect(uiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the action to unset isLoading", () => {
    test("Then it should set isLoading to false", () => {
      const currentUiState: UiState = {
        isLoading: true,
      };

      const expectedUiState: UiState = {
        isLoading: false,
      };

      const uiState: UiState = uiReducer(
        currentUiState,
        unsetIsLoadingActionCreator()
      );

      expect(uiState).toStrictEqual(expectedUiState);
    });
  });
});
