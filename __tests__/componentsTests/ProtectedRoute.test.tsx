import { screen } from "@testing-library/react";
import Component from "../../src/mocks/componentMocks/componentMock";
import {
  mockNoTokenUserState,
  mockWithTokenUserState,
} from "../../src/mocks/storeMocks/storeMocks";
import renderWithProviders from "../../src/utils/testUtils/renderWithProviders";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const spyMockRouter = jest.spyOn(mockRouter, "push");

describe("Given the ProtectedRoute component", () => {
  describe("When it is rendered receiving a Component as a children, and the user has a token", () => {
    test("Then it should render the received Component element", () => {
      renderWithProviders(
        <Component />,

        { user: mockWithTokenUserState }
      );

      const component = screen.getByText("Component");

      expect(component).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user doesn't have a token", () => {
    test("Then it should redirect to login page", () => {
      renderWithProviders(<Component />, { user: mockNoTokenUserState });

      expect(spyMockRouter).toHaveBeenCalled();
    });
  });
});
