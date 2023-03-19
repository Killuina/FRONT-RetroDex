import { useEffect } from "react";
import CreatePokemonForm from "../components/CreatePokemonForm/CreatePokemonForm";
import PokemonList from "../components/PokemonList/PokemonList";
import usePokemon from "../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../store/hooks";
import HomePageStyled from "../styles/pages/HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getUserPokemonList } = usePokemon();

  useEffect(() => {
    getUserPokemonList();
  }, [getUserPokemonList]);

  const userPokemon = useAppSelector((state) => state.pokemon);

  return (
    <HomePageStyled>
      <h2>Home</h2>
      <CreatePokemonForm />
    </HomePageStyled>
  );
};

export default HomePage;
