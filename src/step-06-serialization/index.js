import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      prettyPrint: true,
    },
  })

  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
