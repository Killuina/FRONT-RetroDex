import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { loginUserActionCreator } from "../../src/store/features/userSlice/userSlice";
import wrapper from "../../src/utils/testUtils/Wrapper";
import useUser from "../../src/hooks/userUser/useUser";
import { setIsErrorModalActionCreator } from "../../src/store/features/uiSlice/uiSlice";
import modalMessages from "../../src/modals/modalMessages";
import { spyDispatch } from "../../src/mocks/storeMocks/mockDispatch";
import { mockTokenPayload, user } from "../../src/mocks/userMocks/userMocks";
import { UserCredentials } from "../../src/hooks/types";

jest.mock("jwt-decode", () => jest.fn());

beforeEach(() => jest.resetAllMocks());

export const userCredentials: UserCredentials = {
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
