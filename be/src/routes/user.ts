import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

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
      const token = await sign(payload, c.env.SECRET_KEY)
    
      console.log(user)
      return c.json(token)
    } catch (e) {
      console.log(e);
      c.status(403)
      return c.text("invalid")
    }
  
    
  });
  
  //sign in  api--------
  userRouter.post("/signin", async (c: any) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password
        }
      })
    
      if(!user) {
        c.status(403);
        return c.json({msg: "User not found!"})
      }
    
      const jwt = await sign({id: user.id}, c.env.SECRET_KEY)
      console.log(jwt)
      return c.json("You are logged IN ")
    } catch (e) {
      c.status(403)
      return c.text("invalid")  
    }
  });
  