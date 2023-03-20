import { useEffect } from "react";
import PokemonList from "../components/PokemonList/PokemonList";
import usePokemon from "../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../store/hooks";
import PageStyled from "../styles/PageStyled";

const HomePage = (): JSX.Element => {
  const { getUserPokemonList } = usePokemon();

  useEffect(() => {
    getUserPokemonList();
  }, [getUserPokemonList]);

  const userPokemon = useAppSelector((state) => state.pokemon);

  return (
    <PageStyled>
      <h2>Home</h2>
      <PokemonList pokemonList={userPokemon.pokemonList} />
    </PageStyled>
  );
};

export default HomePage;
