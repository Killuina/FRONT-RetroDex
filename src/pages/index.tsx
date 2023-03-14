import dynamic from "next/dynamic";

const ClientSideProtectedRoute = dynamic(
  () => import("../components/ProtectedRoute/ProtectedRoute"),
  {
    ssr: false,
  }
);

const HomePage = (): JSX.Element => {
  return (
    <ClientSideProtectedRoute>
      <main className="home-page"></main>
    </ClientSideProtectedRoute>
  );
};

export default HomePage;
