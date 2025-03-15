import { Hono } from 'hono'

const app = new Hono()

const todoRoute = app
    // Get Todos
    .get('/', async (c) => {
        return c.json({ data: [{id: 1, title: 'foo'}] })
    })
    // Get Single Todo
    .get('/:id', (c) => {
        return c.json({ id: 1, title: 'foo'})
    })

export default todoRoute
