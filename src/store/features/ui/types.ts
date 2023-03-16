export interface UiState {
  isLoading: boolean;
  modal: {
    isSuccess: boolean;
    isError: boolean;
    message: string;
  };
}
