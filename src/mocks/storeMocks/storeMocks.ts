import { UiState } from "../../store/features/uiSlice/types";
import { UserState } from "../../store/features/userSlice/types";
import { setupStore } from "../../store/store";

export const mockErrorUiState: UiState = {
  modal: { isError: true, message: "Invalid credentials" },
  isLoading: true,
};

export const mockUiErrorStore = setupStore({ ui: mockErrorUiState });

export const mockNoTokenUserState: UserState = {
  id: "1",
  isLogged: false,
  token: "",
  username: "",
};

export const mocknoTokenUserStore = setupStore({ user: mockNoTokenUserState });

export const mockWithTokenUserState: UserState = {
  id: "1",
  isLogged: false,
  token: "mocken",
  username: "",
};

export const mockWithTokenUserStore = setupStore({
  user: mockWithTokenUserState,
});
