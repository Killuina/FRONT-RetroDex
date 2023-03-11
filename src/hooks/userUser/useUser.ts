import decodeToken from "jwt-decode";
import modalMessages from "../../modals/modalMessages";
import { showErrorToast } from "../../modals/modals";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  CustomJwtPayload,
  LoginResponse,
  UserCredentials,
  UseUser,
} from "../types";

const { loginError } = modalMessages;

const useUser = (): UseUser => {
  const dispatch = useAppDispatch();
  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `https://cristina-jimenez-final-project-202301-bcn.onrender.com/users/login`,
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
      showErrorToast(loginError);
    }
  };

  return { loginUser };
};

export default useUser;
