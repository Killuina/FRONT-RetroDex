import { screen } from "@testing-library/react";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  mockPokemonServerSideProps,
  mockUserPokemonList,
} from "../../mocks/pokemonMocks/pokemonMock";
import UserPokemonListPage, {
  getServerSideProps,
} from "../../pages/your-pokemon";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("../../data/getUserPokemonList", () =>
  jest.fn().mockResolvedValue(mockPokemonServerSideProps)
);

describe("Given the UserPokemonPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Your Pokémon' on a heading", () => {
      const expectedTitle = "Your Pokémon";

      renderWithProviders(
        <UserPokemonListPage userPokemonList={[]} isError errorMessage="" />
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it receves a list of pokemon by ServerSideProps with no errors or messages", () => {
    test("Then is should a list of those pokemon", () => {
      renderWithProviders(
        <UserPokemonListPage
          userPokemonList={mockUserPokemonList}
          isError
          errorMessage=""
        />
      );

      const pokemonList = screen.getByRole("list");

      expect(pokemonList).toBeInTheDocument();
    });
  });
});

describe("Given the getServerSideProps function", () => {
  describe("When it is called and the pokemon fetch is ok", () => {
    test("Then it should return the fetched list, no error, and no message", async () => {
      const expectedServerSideProps = mockPokemonServerSideProps;

      const serverSideProps = await getServerSideProps(
        {} as GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
      );
      expect(serverSideProps).toStrictEqual(expectedServerSideProps);
    });
  });
});
