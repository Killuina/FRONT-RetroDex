import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import ClientSideProtectedRoute from "../../components/ProtectedRoute/ClientSideProtectedRoute";
import getUserPokemonList from "../../data/getUserPokemonList";
import { setIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { loadUserPokemonActionCreator } from "../../store/features/userPokemon/pokemonSlice";
import { UserPokemonList } from "../../store/features/userPokemon/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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
  const userPokemon = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(loadUserPokemonActionCreator(userPokemonList));
  }, [dispatch, userPokemonList]);

  if (isError) {
    dispatch(setIsErrorModalActionCreator(errorMessage));
  }

  return (
    <ClientSideProtectedRoute>
      <UserPokemonListPageStyled>
        <h2>Your Pokémon</h2>
        <PokemonList pokemonList={userPokemon} />
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
