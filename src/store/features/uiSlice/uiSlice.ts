import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

export const initialState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentUserState: UiState): UiState => ({
      ...currentUserState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUserState: UiState): UiState => ({
      ...currentUserState,
      isLoading: false,
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
