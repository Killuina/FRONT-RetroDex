import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../../store/hooks";
import PageStyled from "../../styles/shared/PageStyled";
import useToken from "../../hooks/useToken/useToken";

const UserPokemonListPage = (): JSX.Element => {
  const { getUserPokemonList } = usePokemon();

  const { pokemonList } = useAppSelector(({ pokemon }) => pokemon);
  const { token } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if (token) {
      getUserPokemonList(token);
    }
  }, [getUserPokemonList, token]);

  return (
    <ClientSideProtectedRoute>
      <PageStyled>
        <h2>Your Pokémon</h2>
        {pokemonList.length === 0 ? (
          <span className="no-results-feedback">No Pokémon created</span>
        ) : (
          <PokemonList pokemonList={pokemonList} />
        )}
      </PageStyled>
    </ClientSideProtectedRoute>
  );
};

export default UserPokemonListPage;
