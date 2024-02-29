import { rest } from "msw";
import { routes } from "../utils/routes";
import { mockUserPokemonList } from "./pokemonMocks/pokemonMock";

const {
  users: {
    usersPath,
    endpoints: { login, register },
  },
  pokemon: {
    pokemonPath,
    endpoints: { deletePokemon, createPokemon },
  },
} = routes;

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${login}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token: "mocken",
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${register}`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          token: "Manolo registered!",
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
          pokemon: { ...mockUserPokemonList[0] },
        })
      );
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}/${
      mockUserPokemonList[0].id
    }`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          pokemon: mockUserPokemonList[0],
        })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${login}`,
    (req, res, ctx) => {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Wrong credentials",
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${usersPath}${register}`,
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Error registering user",
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
          error: "Couldn't retreive Pokémon",
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
          error: "Error creating Pokémon",
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}${createPokemon}`,
    (req, res, ctx) => {
      return res(
        ctx.status(409),
        ctx.json({
          error: "Name already exists",
        })
      );
    }
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_URL_API!}${pokemonPath}/${
      mockUserPokemonList[0].id
    }`,
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Error finding your Pokémon",
        })
      );
    }
  ),
];
