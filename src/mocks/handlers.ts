import { rest } from "msw";
import { routes } from "../hooks/routes";
import {
  getMockNewUserPokemonData,
  mockUserPokemonList,
} from "./pokemonMocks/pokemonMock";

const {
  users: {
    usersPath: path,
    endpoints: { login },
  },
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon, createPokemon },
  },
} = routes;

const mockNewUserPokemonData = getMockNewUserPokemonData();

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${path}${login}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocken",
        })
      );
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          pokemon: mockUserPokemonList,
        })
      );
    }
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}${deletePokemon}${mockUserPokemonList[0].id}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: `${mockUserPokemonList[0].name} deleted`,
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}${createPokemon}`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          message: "Pokamion created!",
        })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${path}${login}`,
    (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Wrong credentials",
        })
      );
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}`,
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Coudln't retreive Pokémon",
        })
      );
    }
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_URL_API}${pokemonPath}${deletePokemon}${mockUserPokemonList[0].id}`,
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Error deleting Pokémon",
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}${createPokemon}`,
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          message: "Error creating Pokémon",
        })
      );
    }
  ),
];
