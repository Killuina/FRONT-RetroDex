import { rest } from "msw";
import { routes } from "../hooks/routes";
import { mockUserPokemonList } from "./pokemonMocks/pokemonMock";

const {
  users: {
    usersPath: path,
    endpoints: { login },
  },
  pokemon: { pokemonPath },
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
];
