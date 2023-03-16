import PokemonList from "../components/PokemonList/PokemonList";
import { useAppSelector } from "../store/hooks";

const HomePage = (): JSX.Element => {
  const userPokemon = useAppSelector((state) => state.pokemon);

  return (
    <main className="home-page">
      <PokemonList pokemonList={userPokemon} />
    </main>
  );
};

export default HomePage;
