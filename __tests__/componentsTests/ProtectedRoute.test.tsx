import { screen } from "@testing-library/react";
import ProtectedRoute from "../../src/components/ProtectedRoute/ProtectedRoute";
import Component from "../../src/mocks/componentMocks/componentMock";
import {
  mockNoTokenUserState,
  mockWithTokenUserState,
} from "../../src/mocks/storeMocks/storeMocks";
import renderWithProviders from "../../src/utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the ProtectedRoute component", () => {
  describe("When it is rendered receiving a Component as a children, and the user has a token", () => {
    test("Then it should render the received Component element", () => {
      renderWithProviders(
        <ProtectedRoute>
          <Component />
        </ProtectedRoute>,
        { user: mockWithTokenUserState }
      );

      const component = screen.getByText("Component");

      expect(component).toBeInTheDocument();
    });
  });
});
