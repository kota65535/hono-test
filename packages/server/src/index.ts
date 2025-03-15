import { Hono } from 'hono'
import todoRoute from "@/routes/todo";

const app = new Hono()

// Routes
const routes = app
    .route('/todos', todoRoute)

export default {
  port: Number(process.env.PORT) ?? 3000,
  fetch: app.fetch,
}

export type AppType = typeof routes
