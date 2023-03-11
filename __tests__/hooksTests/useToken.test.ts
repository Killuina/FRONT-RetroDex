import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import useToken from "../../src/hooks/useToken/useToken";
import { setLocalStorage } from "../../src/mocks/localStorageMocks/localStorageMocks";
import { mockDispatch } from "../../src/mocks/storeMocks/mockDispatch";
import { mockTokenPayload, user } from "../../src/mocks/userMocks/userMocks";
import { loginUserActionCreator } from "../../src/store/features/userSlice/userSlice";
import wrapper from "../../src/utils/testUtils/Wrapper";

jest.mock("jwt-decode", () => jest.fn());

(decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
  mockTokenPayload
);

describe("Given the useToken hook", () => {
  describe("When getToken function is called and there's a token", () => {
    test("Then it should call the dispatch with loginUser action", async () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper,
      });

      setLocalStorage("mocken");

      const loginUserAction = loginUserActionCreator(user);

      await getToken();

      expect(mockDispatch).toHaveBeenCalledWith(loginUserAction);
    });
  });
});
