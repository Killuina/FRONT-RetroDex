import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../../components/NavBar/NavBar";
import { mockLoggedUserState } from "../../mocks/storeMocks/storeMocks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const mockRemoveToken = jest.fn();

jest.mock("../../hooks/useToken/useToken", () => () => ({
  removeToken: mockRemoveToken,
}));

describe("Given the NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link that says 'to Home page'", () => {
      renderWithProviders(<NavBar />);

      const homeLink = screen.getByRole("link", { name: /to home page/i });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to My Pokémon page'", () => {
      renderWithProviders(<NavBar />);

      const myPokemonLink = screen.getByRole("link", {
        name: /to my pokémon page/i,
      });

      expect(myPokemonLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to Create Pokémon page'", () => {
      renderWithProviders(<NavBar />);

      const createPokemonLink = screen.getByRole("link", {
        name: /to create pokémon page/i,
      });

      expect(createPokemonLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to Login page'", () => {
      renderWithProviders(<NavBar />);

      const loginLink = screen.getByRole("link", {
        name: /to login page/i,
      });

      expect(loginLink).toBeInTheDocument();
    });

    describe("When rendered and the user is logged", () => {
      test("Then it should show a link that says 'Logout'", () => {
        renderWithProviders(<NavBar />, { user: mockLoggedUserState });

        const logoutButton = screen.getByRole("button", {
          name: /logout/i,
        });

        expect(logoutButton).toBeInTheDocument();
      });

      describe("When rendered, the user is logged, and the user clicks on logout button", () => {
        test("Then it should logout the user and remove token from local storage ", async () => {
          renderWithProviders(<NavBar />, { user: mockLoggedUserState });

          const logoutButton = screen.getByRole("button", {
            name: /logout/i,
          });

          await userEvent.click(logoutButton);

          expect(mockRemoveToken).toHaveBeenCalled();
        });
      });
    });
  });
});
