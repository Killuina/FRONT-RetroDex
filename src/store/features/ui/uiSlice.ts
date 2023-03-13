import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialState: UiState = {
  modal: {
    isError: false,
    message: "",
  },
  isLoading: false,
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
    setIsErrorModal: (
      currentUiState: UiState,
      { payload }: PayloadAction<string>
    ): UiState => ({
      ...currentUiState,
      modal: {
        message: payload,
        isError: true,
      },
    }),

    unsetIsErrorModal: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      modal: {
        message: "",
        isError: false,
      },
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setIsErrorModal: setIsErrorModalActionCreator,
  unsetIsErrorModal: unsetIsErrorModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
