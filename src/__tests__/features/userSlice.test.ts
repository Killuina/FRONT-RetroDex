import { initialUserState } from "../../mocks/userMocks/userMocks";
import { User, UserState } from "../../store/features/user/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "../../store/features/user/userSlice";

describe("Given a user reducer", () => {
  const currentState: UserState = {
    id: "2",
    username: "Fernando",
    isLogged: true,
    token: "mocken",
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

  describe("when it receives the action to logout the user", () => {
    test("Then it should reset userState to its initial State", () => {
      const loginUserAction = logoutUserActionCreator();

      const newUserState = userReducer(currentState, loginUserAction);

      expect(newUserState).toStrictEqual(initialUserState);
    });
  });
});
