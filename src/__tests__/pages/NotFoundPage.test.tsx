import { screen } from "@testing-library/react";
import NotFoundPage from "../../pages/404";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given the Not Found page", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Page not found' on a heading", () => {
      const expectedTitle = "Page not found";

      renderWithProviders(<NotFoundPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
