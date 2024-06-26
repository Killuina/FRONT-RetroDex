import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { useAppSelector } from "../../store/hooks";
import PageStyled from "../../styles/shared/PageStyled";
import Link from "next/link";
import { secondaryFont } from "../../styles/fonts";

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
          <>
            <span className="no-results-feedback">No Pokémon created</span>
            <Link
              href={"/create"}
              className={`${secondaryFont.className} create-pokemon-link`}
            >
              Create Pokémon
            </Link>
          </>
        ) : (
          <PokemonList pokemonList={pokemonList} />
        )}
      </PageStyled>
    </ClientSideProtectedRoute>
  );
};

export default UserPokemonListPage;
