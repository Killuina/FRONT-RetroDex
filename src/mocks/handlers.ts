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
    endpoints: { deletePokemon, createPokemon },
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
          totalPokemon: mockUserPokemonList.length,
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
