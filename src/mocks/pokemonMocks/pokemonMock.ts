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
    backupImageUrl:
      "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion.webp",
    createdBy: "63fa113cda52dff28b261e0a",
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
    backupImageUrl:
      "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokemito.webp",
    createdBy: "63fa113cda52dff28b261e0a",
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
  backupImageUrl:
    "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion.webp",
  createdBy: "63fa113cda52dff28b261e0a",
};
