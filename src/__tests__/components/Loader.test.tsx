import { screen } from "@testing-library/react";
import Loader from "../../components/Loader/Loader";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the 'Loader' component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader with the aria-label atributte 'is loading...'", () => {
      renderWithProviders(<Loader />);

      const loader = screen.getByRole("dialog", {
        name: "page is loading...",
      });

      expect(loader).toBeInTheDocument();
    });
  });
});
