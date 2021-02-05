import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer
