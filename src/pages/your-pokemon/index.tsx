import PokemonList from "../../components/PokemonList/PokemonList";
import { useAppSelector } from "../../store/hooks";
import UserPokemonListPageStyled from "../../styles/pages/UserPokemonListPageStyled";

const UserPokemonListPage = (): JSX.Element => {
  const userPokemon = useAppSelector((state) => state.pokemon);

  return (
    <UserPokemonListPageStyled>
      <h2>Your Pokémon</h2>
      <PokemonList pokemonList={userPokemon} />
    </UserPokemonListPageStyled>
  );
};

export default UserPokemonListPage;
