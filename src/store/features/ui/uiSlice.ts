import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialState: UiState = {
  modal: {
    isSuccess: false,
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
      isLoading: initialState.isLoading,
    }),
    setIsErrorModal: (
      currentUiState: UiState,
      { payload }: PayloadAction<string>
    ): UiState => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: payload,
        isError: true,
      },
    }),

    unsetIsErrorModal: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: initialState.modal.message,
        isError: initialState.modal.isError,
      },
    }),
    setIsSucessModal: (
      currentUiState: UiState,
      { payload }: PayloadAction<string>
    ): UiState => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: payload,
        isSuccess: true,
      },
    }),

    unsetIsSucessModal: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: initialState.modal.message,
        isSuccess: initialState.modal.isSuccess,
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
