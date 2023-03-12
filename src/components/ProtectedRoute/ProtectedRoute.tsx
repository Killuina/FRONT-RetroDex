import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const router = useRouter();

  const { token } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  });

  return <>{children}</>;
};

export default ProtectedRoute;
