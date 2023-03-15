import { GetUserPokemonList } from "../../data/types";
import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";

export const mockUserPokemonList: UserPokemonList = [
  {
    id: "1",
    name: "Pokamion",
    types: ["Pesao"],
    ability: "Pesao",
    height: 0,
    weight: 0,
    baseExp: 0,
    imageUrl: "/pokamion.png",
  },
  {
    id: "2",
    name: "Pokemito",
    types: ["Xikito"],
    ability: "Xikito",
    height: 0,
    weight: 0,
    baseExp: 0,
    imageUrl: "/pokemito.png",
  },
];

export const mockUserPokemon: UserPokemon = {
  id: "1",
  name: "Pokamion",
  types: ["Pesao"],
  ability: "Pesao",
  height: 0,
  weight: 0,
  baseExp: 0,
  imageUrl: "/pokamion.png",
};

export const mockPokemonServerSideProps: GetUserPokemonList = {
  props: {
    userPokemonList: mockUserPokemonList,
    isError: false,
    errorMessage: "",
  },
};
