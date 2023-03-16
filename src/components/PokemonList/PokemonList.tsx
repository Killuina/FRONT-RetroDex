import { UserPokemonList } from "../../store/features/userPokemon/types";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListStyled from "./PokemonListStyled";

interface PokemonListProps {
  pokemonList: UserPokemonList;
}

const PokemonList = ({ pokemonList }: PokemonListProps): JSX.Element => {
  return (
    <PokemonListStyled>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </PokemonListStyled>
  );
};

export default PokemonList;
