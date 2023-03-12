import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const router = useRouter();

  const { token } = useAppSelector(({ user }) => user);

  if (!token) {
    router.push("/login");
  }

  return <>{children}</>;
};

export default ProtectedRoute;
