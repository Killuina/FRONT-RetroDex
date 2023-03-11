import { rest } from "msw";
import { routes } from "../hooks/paths";

const {
  users: {
    path,
    endpoints: { login },
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
];
