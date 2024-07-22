import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
// import myMiddleware from "../middleware";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  };
}>();

// blogRouter.use('/', myMiddleware)

// to post api
blogRouter.post("/", async (c: any) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId
      }
    })

    return c.json({
      id: post.id
    });

  } catch (error) {
    c.status(403)
    console.log(error)
    c.json({
      msg: error
    })
  }
});

blogRouter.put("/", (c: any) => {
  return c.text("Helow Hopo!");
});

blogRouter.get("/:id", (c: any) => {
  return c.text("Helowefdsdf Hoporgggggsssssdfggf!");
});
