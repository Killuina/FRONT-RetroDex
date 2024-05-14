import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";
import FormDataPolyfill from "form-data";

export const mockUserPokemonList: UserPokemonList = [
  {
    id: "1",
    name: "Pokamion",
    firstType: "Water",
    secondType: "Fairy",
    ability: "Pesao",
    height: "2",
    weight: "3",
    baseExp: "4",
    imageUrl: "/pokamion.png",
    backupImageUrl:
      "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion.webp",
    createdBy: {
      username: "Manolo",
      id: "63fa113cda52dff28b261e0a",
    },
  },
  {
    id: "2",
    name: "Pokemito",
    firstType: "Water",
    secondType: "Dragon",
    ability: "Xikito",
    height: "2",
    weight: "3",
    baseExp: "4",
    imageUrl: "/pokemito.png",
    backupImageUrl:
      "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokemito.webp",
    createdBy: {
      username: "Manolo",
      id: "63fa113cda52dff28b261e0a",
    },
  },
];

export const mockUserPokemon: UserPokemon = {
  id: "1",
  name: "Pokamion",
  firstType: "Water",
  secondType: "Fairy",
  ability: "Pesao",
  height: "2",
  weight: "3",
  baseExp: "4",
  imageUrl: "/pokamion.png",
  backupImageUrl:
    "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion.webp",
  createdBy: {
    username: "Manolo",
    id: "63fa113cda52dff28b261e0a",
  },
};

export const getMockNewUserPokemonData = (): FormDataPolyfill => {
  const mockNewUserPokemonData = new FormDataPolyfill();
  mockNewUserPokemonData.append("name", mockUserPokemon.name);
  mockNewUserPokemonData.append("firstType", mockUserPokemon.firstType);
  mockNewUserPokemonData.append("secondType", mockUserPokemon.secondType);
  mockNewUserPokemonData.append("ability", mockUserPokemon.ability);
  mockNewUserPokemonData.append("height", `${mockUserPokemon.height}`);
  mockNewUserPokemonData.append("weight", `${mockUserPokemon.weight}`);
  mockNewUserPokemonData.append("baseExp", `${mockUserPokemon.baseExp}`);
  return mockNewUserPokemonData;
};
