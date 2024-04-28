import decodeToken from "jwt-decode";
import { useCallback } from "react";
import modalMessages from "../../modals/modalMessages";
import { setIsSuccessModalActionCreator } from "../../store/features/ui/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomJwtPayload } from "../types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const { logoutSuccess } = modalMessages;

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, sub }: CustomJwtPayload = decodeToken(token);
      dispatch(loginUserActionCreator({ token, username, id: sub }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
    dispatch(setIsSuccessModalActionCreator(logoutSuccess));
  };
  return { getToken, removeToken };
};

export default useToken;
