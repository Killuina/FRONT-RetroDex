import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  username: "a",
  isLogged: false,
  token: "",
  id: "a",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentUserState,
      { payload: { id, token, username } }: PayloadAction<User>
    ) => ({
      ...currentUserState,
      isLogged: true,
      username,
      id,
      token,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
