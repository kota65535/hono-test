import { Hono } from 'hono'
import type {AppType} from '@hono-test/server/src'
import { hc } from 'hono/client'

const client = hc<AppType>("")

const app = new Hono()

app.get('/', async (c) => {
  const res = await client.todos.$get()
  const data = await res.json();

  return c.text('Hello Hono!')
})

export default app
