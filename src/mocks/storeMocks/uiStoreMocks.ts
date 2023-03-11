import { UiState } from "../../store/features/uiSlice/types";
import { setupStore } from "../../store/store";

export const mockErrorUiState: UiState = {
  modal: { isError: true, message: "Invalid credentials" },
  isLoading: true,
};

export const mockUiErrorStore = setupStore({ ui: mockErrorUiState });
