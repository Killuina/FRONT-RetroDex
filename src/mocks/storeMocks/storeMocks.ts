import { UiState } from "../../store/features/ui/types";
import { UserState } from "../../store/features/user/types";

export const mockErrorUiState: UiState = {
  modal: { isSuccess: false, isError: true, message: "Error!" },
  isLoading: true,
};

export const mockSucessUiState: UiState = {
  modal: { isSuccess: true, isError: false, message: "Sucess!" },
  isLoading: true,
};
export const mockLoadingUiState: UiState = {
  modal: { isSuccess: false, isError: false, message: "" },
  isLoading: true,
};

export const mockNoTokenUserState: UserState = {
  id: "1",
  isLogged: false,
  token: "",
  username: "",
};

export const mockWithTokenUserState: UserState = {
  id: "1",
  isLogged: false,
  token: "mocken",
  username: "",
};

export const mockLoggedUserState: UserState = {
  id: "1",
  isLogged: true,
  token: "mocken",
  username: "",
};
