import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { act } from "react-dom/test-utils";
import { User } from "../../src/store/features/userSlice/types";
import { loginUserActionCreator } from "../../src/store/features/userSlice/userSlice";
import { store } from "../../src/store/store";
import Wrapper from "../../src/utils/testUtils/Wrapper";
import { CustomJwtPayload, UserCredentials } from "../../src/hooks/types";
import useUser from "../../src/hooks/userUser/useUser";
import { server } from "../../src/mocks/server";
import { errorHandlers } from "../../src/mocks/handlers";
import { toast } from "react-toastify";

const mockDispatch = jest.spyOn(store, "dispatch");
const mockError = jest.spyOn(toast, "error");

jest.mock("jwt-decode", () => jest.fn());

const mockTokenPayload: CustomJwtPayload = {
  username: "Manolo",
  sub: "1",
};
const userCredentials: UserCredentials = {
  username: "Manolo",
  password: "manolo1",
};
const user: User = {
  id: "1",
  username: "Manolo",
  token: "mocken",
};

beforeEach(() => jest.resetAllMocks());

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

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );
      const loginUsersAction = loginUserActionCreator(user);

      await act(async () => loginUser(userCredentials));

      expect(mockDispatch).toHaveBeenCalledWith(loginUsersAction);
    });
  });

  describe("When it is called with the wrong user credentials", () => {
    test("Then it should call toastify's error method", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(mockError).toHaveBeenCalled();
    });
  });
});
