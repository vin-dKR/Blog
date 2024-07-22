import { Next, Context, MiddlewareHandler } from "hono";
import { verify } from "hono/jwt";

// ver -2
// export const middleware = new Hono<{
//     Bindings: {
//       SECRET_KEY: string;
//     };
//   }>()

//middleware:::::::
// middleware.use(async (c, next) => {
//     const header = c.req.header("authorization") || "";
//     if (!header) {
//       return c.json({ error: "BSDK log kar na pehle!!" }, 401);
//     }
//     const token = header.split(" ")[1];

//     const response = await verify(token, c.env.SECRET_KEY);

//     if (response.id) {
//       await next();
//     } else {
//       c.status(403);
//       return c.json({
//         msg: "Beta fir se log in kar ke aaaaaaaaaaaaa",
//       });
//     }
//   });








// ver -2
/*
const myMiddleware: MiddlewareHandler<{ Bindings: { DATABASE_URL: string; SECRET_KEY: string; }; }, never, {}> = async (c, next) => {
  const header = c.req.header("authorization") || "";
  if (!header) {
    return c.json({ error: "BSDK log kar na pehle!!" }, 401);
  }
  const token = header.split(" ")[1];

  const response = await verify(token, c.env.SECRET_KEY);

  if (response.id) {
    return next();
  } else {
    return c.json({ error: "Invalid token" }, 401);
  }
};

export default myMiddleware;
*/
