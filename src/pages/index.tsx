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
      {pokemonList.length === 0 ? (
        <span className="no-results-feedback">No results found</span>
      ) : (
        <PokemonList pokemonList={pokemonList} />
      )}
    </PageStyled>
  );
};

export default HomePage;
