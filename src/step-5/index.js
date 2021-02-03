import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is ready to go!')

  return fastify
}

export default buildServer
