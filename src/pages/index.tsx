import dynamic from "next/dynamic";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { userPokemon } from "../data/userPokemonList";

const ClientSideProtectedRoute = dynamic(
  () => import("../components/ProtectedRoute/ProtectedRoute"),
  {
    ssr: false,
  }
);

const HomePage = (): JSX.Element => {
  return (
    <ClientSideProtectedRoute>
      <main className="home-page">
        <PokemonCard userPokemon={userPokemon} />
      </main>
    </ClientSideProtectedRoute>
  );
};

export default HomePage;
