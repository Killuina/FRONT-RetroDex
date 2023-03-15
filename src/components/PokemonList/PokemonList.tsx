import { UserPokemonList } from "../../store/features/userPokemon/types";
import PokemonCard from "../PokemonCard/PokemonCard";

interface PokemonListProps {
  pokemonList: UserPokemonList;
}

const PokemonList = ({ pokemonList }: PokemonListProps): JSX.Element => {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard Pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
