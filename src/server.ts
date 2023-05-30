import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 4444,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:4444')
  })
