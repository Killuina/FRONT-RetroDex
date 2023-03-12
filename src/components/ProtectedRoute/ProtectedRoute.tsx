import { NextRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  children: ReactNode;
  router: NextRouter;
}

const ProtectedRoute = ({
  children,
  router,
}: ProtectedRouteProps): JSX.Element => {
  const { token } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [router, token]);

  return <>{children}</>;
};

export default ProtectedRoute;
