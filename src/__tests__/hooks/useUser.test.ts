import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { UserLoginCredentials } from "../../hooks/types";
import useUser from "../../hooks/userUser/useUser";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import { mockTokenPayload, user } from "../../mocks/userMocks/userMocks";
import modalMessages from "../../modals/modalMessages";
import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import wrapper from "../../utils/testUtils/Wrapper";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("jwt-decode", () => jest.fn());

beforeEach(() => jest.resetAllMocks());

export const userCredentials: UserLoginCredentials = {
  username: "Manolo",
  password: "12345678",
};

describe("Given the useUser custom hook", () => {
  describe("When loginUser function is called", () => {
    test("Then it should call the dispatch with loginUser action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const loginUsersAction = loginUserActionCreator(user);

      await act(async () => loginUser(userCredentials));

      expect(spyDispatch).toHaveBeenCalledWith(loginUsersAction);
    });
  });

  describe("When it is called with the wrong user credentials", () => {
    beforeEach(() => server.use(...errorHandlers));

    test("Then it should call the dispatch with setIsError action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper });

      await act(async () => loginUser(userCredentials));

      const setIsErrorAction = setIsErrorModalActionCreator(
        modalMessages.loginError
      );

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorAction);
    });
  });
});
