import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogPost, updateBlogPost } from "@vinodkr/medium-common";
// import myMiddleware from "../middleware";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  },
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async(c, next) => {
  const authHeader = c.req.header("authorization") || "";

  const token = authHeader.split(' ')[1]
  try {
    const user = await verify(token, c.env.SECRET_KEY)
  if(user) {
    c.set("userId", String(user.id))
    await next()
  } else {
    c.status(403)
    return c.json({
      msg: "You are not logged in"
    })
  }
  } catch (error) {
    c.json({
      msg: error
    })
  }
}) 

// to post api
blogRouter.post("/", async(c) => {
  const body = await c.req.json();
  const { success } = createBlogPost.safeParse(body);
  if (!success) {
      c.status(400);
      return c.json({ msg: "Inputs are not correct" });
  } 
  const authorId = c.get("userId")

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(authorId)
      }
    })

    return c.json({
      id: post.id
    });

  } catch (error) {
    c.status(403)
    console.log(error)
  }
});

blogRouter.put("/", async(c) => {
  const body = await c.req.json();
  const { success } = updateBlogPost.safeParse(body);
  if (!success) {
      c.status(400);
      return c.json({ msg: "Inputs are not correct" });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.post.update({
      where: {
        id: body.id, 
      },
      data: {
        title: body.title,
        content: body.content
      }
    })

    return c.json({
      id: post.id
    });

  } catch (error) {
    c.status(403)
    c.json({
      msg: "not updated yet"
    })
  }
});


blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const select: Prisma.PostSelect = {
    id: true,
    title: true,
    content: true,
    createdAt: true,
    author: {
      select: {
        name: true
      }
    },
  }

  const posts = await prisma.post.findMany({
    select
  })

  return c.json({posts})
})


blogRouter.get("/:id", async (c: any) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: Number(id)
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
      post
    });

  } catch (error) {
    c.status(411)
    return c.json({
      msg: "error while fetching blog post"
    })
  }
});


