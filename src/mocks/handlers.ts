import { rest } from "msw";
import { routes } from "../hooks/routes";
import { mockUserPokemonList } from "./pokemonMocks/pokemonMock";

const {
  users: {
    usersPath: path,
    endpoints: { login },
  },
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon },
  },
} = routes;

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
];
