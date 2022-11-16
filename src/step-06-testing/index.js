import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('./routes/users.js'))
  fastify.register(import('./routes/login.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
