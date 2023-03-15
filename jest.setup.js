import "whatwg-fetch";
import "@testing-library/jest-dom";
import { server } from "./src/mocks/server";

jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: (...props) => {
    const dynamicModule = jest.requireActual("next/dynamic");
    const dynamicActualComp = dynamicModule.default;
    const RequiredComponent = dynamicActualComp(props[0]);
    RequiredComponent.preload
      ? RequiredComponent.preload()
      : RequiredComponent.render.preload();
    return RequiredComponent;
  },
}));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
