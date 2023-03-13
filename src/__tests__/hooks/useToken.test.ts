import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import useToken from "../../hooks/useToken/useToken";
import {
  mockLocalStorage,
  setLocalStorage,
} from "../../mocks/localStorageMocks/localStorageMocks";
import { spyDispatch } from "../../mocks/storeMocks/mockDispatch";
import { mockTokenPayload, user } from "../../mocks/userMocks/userMocks";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import wrapper from "../../utils/testUtils/Wrapper";

afterAll(() => {
  window.localStorage.clear();
});

jest.mock("jwt-decode", () => jest.fn());

(decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
  mockTokenPayload
);

describe("Given the useToken hook", () => {
  describe("When getToken function is called and there's a token in local storage", () => {
    test("Then it should call the dispatch with loginUser action", async () => {
      const mockedToken = "mocken";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper,
      });

      const loginUserAction = loginUserActionCreator(user);

      setLocalStorage("token", mockedToken);

      await getToken();

      expect(spyDispatch).toHaveBeenCalledWith(loginUserAction);
    });
  });

  describe("When removeToken function is called", () => {
    test("Then it should remove the token from the local storage", async () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper,
      });

      const mockedRemoveItem = jest.spyOn(mockLocalStorage, "removeItem");

      await removeToken();

      expect(mockedRemoveItem).toHaveBeenCalledWith("token");
    });
  });
});
