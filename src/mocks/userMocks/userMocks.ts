import { CustomJwtPayload } from "../../hooks/types";
import { User, UserState } from "../../store/features/user/types";

export const mockTokenPayload: CustomJwtPayload = {
  username: "Manolo",
  sub: "1",
};

export const user: User = {
  id: "1",
  username: "Manolo",
  token: "mocken",
};

export const initialUserState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};
