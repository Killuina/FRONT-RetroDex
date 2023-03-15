import ClientSideProtectedRoute from "../components/ProtectedRoute/ClientSideProtectedRoute";

const HomePage = (): JSX.Element => {
  return (
    <ClientSideProtectedRoute>
      <main className="home-page"></main>
    </ClientSideProtectedRoute>
  );
};

export default HomePage;
