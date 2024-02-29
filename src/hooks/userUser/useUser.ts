import decodeToken from "jwt-decode";
import { useRouter } from "next/router";
import modalMessages from "../../modals/modalMessages";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { User } from "../../store/features/user/types";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { routes } from "../../utils/routes";
import {
  CustomJwtPayload,
  LoginResponse,
  UserCredentials,
  UserLoginCredentials,
} from "../types";

const {
  users: {
    usersPath,
    endpoints: { login, register },
  },
} = routes;

const { loginError, registerError, registerSuccess } = modalMessages;

interface UseUser {
  loginUser: (userCredentials: UserLoginCredentials) => Promise<void>;
  registerUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUser => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const loginUser = async (userCredentials: UserLoginCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${login}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(loginError);
      }
      const { token } = (await response.json()) as LoginResponse;

      const { sub, username }: CustomJwtPayload = decodeToken(token);

      const loggedUser: User = {
        username,
        token,
        id: sub,
      };

      dispatch(loginUserActionCreator(loggedUser));

      dispatch(unsetIsLoadingActionCreator());

      localStorage.setItem("token", token);

      router.push("/");
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  const registerUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${register}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(registerError);
      }

      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsSuccessModalActionCreator(registerSuccess));

      router.push("/login");
    } catch (error: unknown) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  return { loginUser, registerUser };
};

export default useUser;
