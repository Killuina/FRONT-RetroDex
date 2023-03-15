import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import getUserPokemonList from "../../data/getUserPokemonList";

import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { UserPokemonList } from "../../store/features/userPokemon/types";
import { useAppDispatch } from "../../store/hooks";
import UserPokemonListPageStyled from "../../styles/pages/UserPokemonListPageStyled";

export interface UserPokemonListPageProps {
  userPokemonList: UserPokemonList;
  isError: boolean;
  errorMessage: string;
}

const UserPokemonListPage = ({
  userPokemonList,
  isError,
  errorMessage,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const dispatch = useAppDispatch();

  if (isError) {
    dispatch(setIsErrorModalActionCreator(errorMessage));
  }

  return (
    <ClientSideProtectedRoute>
      <UserPokemonListPageStyled>
        <h2>Your Pokémon</h2>
        <PokemonList pokemonList={userPokemonList} />
      </UserPokemonListPageStyled>
    </ClientSideProtectedRoute>
  );
};

export const getServerSideProps: GetServerSideProps<
  UserPokemonListPageProps
> = async () => {
  const userPokemonList = await getUserPokemonList();

  return userPokemonList;
};

export default UserPokemonListPage;
