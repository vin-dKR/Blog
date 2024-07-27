import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET_KEY: string
  }
}>();

app.use(
  '/*',
  cors({
    origin: 'http://localhost:5173',
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    maxAge: 86400, // 24 hours
    credentials: true,
  })
)

app.route("api/v1/user", userRouter)
app.route("api/v1/blog", blogRouter)

export default app;