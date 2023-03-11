import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialState: UiState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
    setIsError: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isError: true,
    }),

    unsetIsError: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isError: false,
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setIsError: setIsErrorActionCreator,
  unsetIsError: unsetIsErrorActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
