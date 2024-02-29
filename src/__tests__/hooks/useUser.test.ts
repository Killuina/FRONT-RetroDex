import { renderHook, waitFor } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { UserCredentials, UserLoginCredentials } from "../../hooks/types";
import useUser from "../../hooks/userUser/useUser";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import { mockTokenPayload, user } from "../../mocks/userMocks/userMocks";
import modalMessages from "../../modals/modalMessages";
import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import wrapper from "../../utils/testUtils/Wrapper";
import { showSuccessToast } from "../../modals/modals";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("jwt-decode", () => jest.fn());

beforeEach(() => jest.resetAllMocks());

const userLoginCredentials: UserLoginCredentials = {
  username: "Manolo",
  password: "12345678",
};

const userCredentials: UserCredentials = {
  email: "manolo@hotmail.com",
  username: "Manolo",
  password: "12345678",
};

const spyRouter = jest.spyOn(mockRouter, "push");

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

      await act(async () => loginUser(userLoginCredentials));

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

      await act(async () => loginUser(userLoginCredentials));

      const setIsErrorAction = setIsErrorModalActionCreator(
        modalMessages.loginError
      );

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorAction);
    });
  });

  describe("When registerUser function is called and process is ok", () => {
    test("Then it should redirect to login page", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper,
      });

      const expectedRoute = "/login";

      await waitFor(() => registerUser(userCredentials));

      expect(spyRouter).toHaveBeenCalledWith(expectedRoute);
    });
  });

  describe("When registerUser function is called and process goes wrong", () => {
    test("Then it should call dispatch with set error modal action with 'Error registering user' message", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper,
      });

      const setIsErrorModalAction = setIsErrorModalActionCreator(
        modalMessages.registerError
      );

      await waitFor(() => registerUser(userCredentials));

      expect(spyDispatch).toHaveBeenCalledWith(setIsErrorModalAction);
    });
  });
});
