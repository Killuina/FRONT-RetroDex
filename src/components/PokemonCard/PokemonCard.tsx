import Image from "next/image";
import { UserPokemon } from "../../store/features/userPokemon/types";
import { mainFont } from "../../styles/fonts";
import PokemonCardStyled from "./PokemonCardStyled";

interface PokemonCardProps {
  userPokemon: UserPokemon;
}

const PokemonCard = ({
  userPokemon: { name, imageUrl, types },
}: PokemonCardProps): JSX.Element => {
  return (
    <PokemonCardStyled pokemonType={types[0]} className="pokemon-card">
      <Image
        src={`${imageUrl}`}
        alt={`${name}`}
        width="130"
        height="130"
        priority={true}
      />
      <h2 className="pokemon-card__name">{name}</h2>
      <span className="pokemon-card__types">Type:{types.join("/")}</span>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
