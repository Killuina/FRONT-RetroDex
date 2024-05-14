import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { secondaryFont } from "../../styles/fonts";
import DetailPageStyled from "../../styles/pages/DetailPageStyled";
import {
  getPokemonDetailData,
  getPokemonListData,
} from "../../utils/dataUtils/dataUtils";
import { PokemonDetailPageProps } from "../../utils/dataUtils/types";

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  const pokemonListProps = await getPokemonListData();

  const paths = pokemonListProps.props.pokemonList.map((pokemon) => {
    return {
      params: { id: pokemon.id },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id = context.params!.id;
  const pokemonDetailProps = await getPokemonDetailData(id as string);

  return pokemonDetailProps;
};

const PokemonDetailPage = ({
  pokemon: {
    ability,
    backupImageUrl,
    baseExp,
    height,
    name,
    firstType,
    secondType,
    weight,
    imageUrl,
    createdBy: { username },
  },
  isError,
  errorMessage,
}: PokemonDetailPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  if (isError) {
    dispatch(setIsErrorModalActionCreator(errorMessage));
  }

  return (
    <DetailPageStyled>
      <Image
        alt={name}
        src={`${imageUrl && backupImageUrl}`}
        priority
        height="120"
        width="120"
      />
      <h2 className="pokemon-detail__name">{name}</h2>
      <div className={`${secondaryFont.className} pokemon-detail`}>
        <p className="pokemon-detail__type">
          <span>Types:</span> {`${firstType}/${secondType}`}
        </p>
        <p className="pokemon-detail__type">
          <span>Ability:</span> {ability}
        </p>
        <p className="pokemon-detail__height">
          <span>Height:</span> {height}m
        </p>
        <p className="pokemon-detail__weight">
          <span>Weight:</span> {weight}kg
        </p>
        <p className="pokemon-detail__base-exp">
          <span>Base Exp:</span> {baseExp}pts
        </p>
        <p className="pokemon-detail__created-by">
          <span>Created by:</span> {username}
        </p>
      </div>
    </DetailPageStyled>
  );
};

export default PokemonDetailPage;
