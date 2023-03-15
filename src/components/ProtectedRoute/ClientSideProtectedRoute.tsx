import dynamic from "next/dynamic";

const ClientSideProtectedRoute = dynamic(() => import("./ProtectedRoute"), {
  ssr: false,
});

export default ClientSideProtectedRoute;
