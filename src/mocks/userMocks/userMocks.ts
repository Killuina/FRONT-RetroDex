import { CustomJwtPayload } from "../../hooks/types";
import { User } from "../../store/features/userSlice/types";

export const mockTokenPayload: CustomJwtPayload = {
  username: "Manolo",
  sub: "1",
};

export const user: User = {
  id: "1",
  username: "Manolo",
  token: "mocken",
};
