import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/testUtils/Wrapper";
import { CustomJwtPayload, UserCredentials } from "../types";
import useUser from "./useUser";

const mockDispatch = jest.spyOn(store, "dispatch");

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("jwt-decode", () => jest.fn());

const mockTokenPayload: CustomJwtPayload = {
  username: "Manolo",
  sub: "1",
};

describe("Given the useUser custom hook", () => {
  describe("When loginUser function is called", () => {
    test("Then it should call the dispatch with loginUser action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });
      const userCredentials: UserCredentials = {
        username: "Manolo",
        password: "manolo1",
      };
      const user: User = {
        id: "1",
        username: "Manolo",
        token: "mocken",
      };

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );
      const loginUsersAction = loginUserActionCreator(user);

      await act(async () => loginUser(userCredentials));

      expect(mockDispatch).toHaveBeenCalledWith(loginUsersAction);
    });
  });
});
