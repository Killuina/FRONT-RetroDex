import decodeToken from "jwt-decode";
import { User } from "@/store/features/userSlice/types";
import { useAppDispatch } from "@/store/hooks";
import { paths } from "../paths";
import {
  CustomJwtPayload,
  LoginResponse,
  UserCredentials,
  UseUser,
} from "../types";
import { loginUserActionCreator } from "@/store/features/userSlice/userSlice";

const {
  users: {
    path,
    endpoints: { login },
  },
} = paths;

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
        id: sub!,
      };

      dispatch(loginUserActionCreator(loggedUser));

      localStorage.setItem("token", token);
    } catch (error) {}
  };

  return { loginUser };
};

export default useUser;
