import { useEffect } from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../../store/hooks";
import PageStyled from "../../styles/PageStyled";

const UserPokemonListPage = (): JSX.Element => {
  const { getUserPokemonList } = usePokemon();

  useEffect(() => {
    getUserPokemonList();
  }, [getUserPokemonList]);

  const userPokemon = useAppSelector((state) => state.pokemon);

  return (
    <ClientSideProtectedRoute>
      <PageStyled>
        <h2>Your Pokémon</h2>
        <PokemonList pokemonList={userPokemon.pokemonList} />
      </PageStyled>
    </ClientSideProtectedRoute>
  );
};

export default UserPokemonListPage;
