import { User, UserState } from "../src/store/features/userSlice/types";
import {
  loginUserActionCreator,
  userReducer,
} from "../src/store/features/userSlice/userSlice";

describe("Given a user reducer", () => {
  const currentState: UserState = {
    id: "",
    username: "",
    isLogged: false,
    token: "",
  };

  describe("When it receives a user with username 'notExperimentalApp', token 'mocken' and an action to log in the user", () => {
    test("Then it should return the user with its isLogged property set as true", () => {
      const user: User = {
        username: "notExperimentalApp",
        token: "mocken",
        id: "",
      };
      const expectedUserState: UserState = {
        id: "",
        username: "notExperimentalApp",
        token: "mocken",
        isLogged: true,
      };
      const loginUserAction = loginUserActionCreator(user);

      const newUserState = userReducer(currentState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
