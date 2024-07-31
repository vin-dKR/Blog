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


//update post api
blogRouter.put("/", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const { id, title, content } = body

  // Get the user ID from the JWT token
  const userId = c.get('userId')

  try {
    // First, check if the post exists and belongs to the user
    const existingPost = await prisma.post.findFirst({
      where: {
        id: Number(id),
        authorId: Number(userId)
      }
    })

    if (!existingPost) {
      c.status(403)
      return c.json({
        message: "You don't have permission to update this post or the post doesn't exist"
      })
    }

    // If the post exists and belongs to the user, update it
    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        content
      }
    })

    return c.json({
      message: "Post updated successfully",
      post: updatedPost
    })

  } catch (error) {
    console.error("Error updating post:", error)
    c.status(500)
    return c.json({
      message: "Error updating post"
    })
  }
})


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






