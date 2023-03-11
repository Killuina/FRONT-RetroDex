import decodeToken from "jwt-decode";
import modalMessages from "../../modals/modalMessages";
import { setIsErrorModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { routes } from "../routes";
import {
  CustomJwtPayload,
  LoginResponse,
  UserCredentials,
  UseUser,
} from "../types";

const {
  users: {
    path,
    endpoints: { login },
  },
} = routes;

const { loginError } = modalMessages;

const useUser = (): UseUser => {
  const dispatch = useAppDispatch();
  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API!}${path}${login}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );
      const { token } = (await response.json()) as LoginResponse;

      const { sub, username }: CustomJwtPayload = decodeToken(token);

      const loggedUser: User = {
        username,
        token,
        id: sub,
      };

      dispatch(loginUserActionCreator(loggedUser));

      localStorage.setItem("token", token);
    } catch (error) {
      dispatch(setIsErrorModalActionCreator(loginError));
    }
  };

  return { loginUser };
};

export default useUser;
