import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('@fastify/jwt'), {
    secret: 'supersecret',
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
