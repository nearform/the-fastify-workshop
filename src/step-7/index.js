import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('fastify-jwt'), {
    secret: 'supersecret',
  })
  fastify.register(import('./routes/users.js'))
  fastify.register(import('./routes/login.js'))

  return fastify
}

export default buildServer
