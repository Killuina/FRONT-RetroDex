import Image from "next/image";
import Link from "next/link";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import { UserPokemon } from "../../store/features/userPokemon/types";
import { useAppSelector } from "../../store/hooks";
import PokemonCardStyled from "./PokemonCardStyled";

interface PokemonCardProps {
  pokemon: UserPokemon;
}

const PokemonCard = ({
  pokemon: { name, imageUrl, types, id, backupImageUrl, createdBy },
}: PokemonCardProps): JSX.Element => {
  const { username } = useAppSelector(({ user }) => user);
  const { deleteUserPokemon } = usePokemon();

  const handleDeletePokemon = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    deleteUserPokemon(id);
  };

  return (
    <PokemonCardStyled className={`pokemon-card ${types[0]}`}>
      <Link href={`/pokemon/${encodeURIComponent(id)}`} className="link">
        <Image
          src={`${imageUrl && backupImageUrl}`}
          alt={`${name}`}
          width="120"
          height="120"
          priority
        />
      </Link>
      <h3 className="pokemon-card__name">{name}</h3>
      <span className="pokemon-card__types">Type:{types.join("/")}</span>
      <div className="pokemon-card__buttons">
        {username === createdBy.username && (
          <>
            <button className="pokemon-card__button" aria-label="edit pokemon">
              <svg
                width="35"
                height="35"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.6374 0.537964H36.465V5.71038H41.6374V0.537964ZM5.43023 5.71042H20.9475V10.8828H5.43023V47.0898H41.6373V31.5725H46.8097V52.2621H46.8095V52.2622H0.257812V52.2621V47.0898V10.8828V5.71042H5.43023ZM15.7755 26.3999H10.6031V36.7449V41.9172V41.9173H26.1204V36.7449H31.2923V31.5725H26.1199V36.7449H15.7755V26.3999ZM26.12 21.2277H20.9478V26.3999H15.7754V21.2275H20.9476V16.0552L26.1199 16.0552V10.8828H31.2923V16.0552L26.12 16.0552V21.2277ZM31.2929 5.71042H36.4653V10.8828H31.2929V5.71042ZM41.6373 5.71042H46.8097V10.8828H51.9819V16.0552L46.8097 16.0552V21.2277H41.6374V26.3999H36.465V21.2275H41.6373V16.0552L46.8095 16.0552V10.8828H41.6373V5.71042ZM31.2929 26.3999H36.4653V31.5723H31.2929V26.3999Z"
                  fill="#2D3748"
                />
              </svg>
            </button>
            <button
              onClick={handleDeletePokemon}
              className="pokemon-card__button"
              aria-label="delete pokemon"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H6.42857V6.42856H12.8569V12.8571H6.42838V6.42857H0V0ZM6.42857 38.5714H0V45H6.42857V38.5714ZM38.5716 38.5714H45.0002V45H38.5716V38.5714ZM19.286 12.8572H12.8574V19.2857L19.2858 19.2857V25.7143H12.8572V32.1428H19.2858V25.7143H25.7142V32.1428H32.1428V25.7143H25.7144V19.2857L32.1426 19.2857V12.8572H25.714V19.2857H19.286V12.8572ZM32.1426 32.1429H38.5711V38.5715H32.1426V32.1429ZM32.1431 6.42856L38.5714 6.42857V0H45V6.42857L38.5716 6.42856V12.8571H32.1431V6.42856ZM6.42887 32.1429H12.8574V38.5715H6.42887V32.1429Z"
                  fill="#2D3748"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
