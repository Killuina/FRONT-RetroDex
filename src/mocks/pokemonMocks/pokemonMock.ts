import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";
import FormDataPolyfill from "form-data";

export const mockUserPokemonList: UserPokemonList = [
  {
    id: "1",
    name: "Pokamion",
    types: ["Water", "Fairy"],
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
    types: ["Water", "Dragon"],
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
  types: ["Water", "Fairy"],
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
  mockNewUserPokemonData.append("firstType", mockUserPokemon.types[0]);
  mockNewUserPokemonData.append("secondType", mockUserPokemon.types[1]);
  mockNewUserPokemonData.append("ability", mockUserPokemon.ability);
  mockNewUserPokemonData.append("height", `${mockUserPokemon.height}`);
  mockNewUserPokemonData.append("weight", `${mockUserPokemon.weight}`);
  mockNewUserPokemonData.append("baseExp", `${mockUserPokemon.baseExp}`);
  return mockNewUserPokemonData;
};
