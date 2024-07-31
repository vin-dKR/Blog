import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupSchema, signinSchema } from "@vinodkr/medium-common";


export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET_KEY: string
  }
}>()

//signup -- api
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ msg: "Inputs are not correct" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })

    const payload = {
      id: user.id,
      // exp: Math.floor(Date.now() / 1000) + 60 * 5,
    }
    const jwt = await sign({
      id: user.id
    }, c.env.SECRET_KEY);

    return c.json({ jwt, email: user.email, name: user.name })
  } catch (e) {
    console.log(e);
    c.status(403)
    return c.text("Sign UP Failed")
  }


});

//sign in  api--------
userRouter.post("/signin", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ msg: "Inputs are not correct" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })

    if (!user) {
      c.status(403);
      return c.json({ msg: "User not found!" })
    }

    const jwt = await sign({
      id: user.id
    }, c.env.SECRET_KEY);

    return c.json({ jwt, email: user.email, name: user.name })
  } catch (e) {
    c.status(411)
    return c.text("Sign IN Failed")
  }
});


//just for the test not fot production
userRouter.get("/test", (c) => {
  return c.json({ msg: "Hello World" })
})