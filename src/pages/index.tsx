import { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import PokemonList from "../components/PokemonList/PokemonList";
import usePokemon from "../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../store/hooks";
import PageStyled from "../styles/pages/PageStyled";

const HomePage = (): JSX.Element => {
  const { getUserPokemonList } = usePokemon();
  const { filter, pokemonList } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    getUserPokemonList(filter);
  }, [filter, getUserPokemonList]);

  return (
    <PageStyled>
      <h2>Home</h2>
      <Filter />
      <PokemonList pokemonList={pokemonList} />
    </PageStyled>
  );
};

export default HomePage;
