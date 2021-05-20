import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
      prettyPrint: config.PRETTY_PRINT,
    }
  }

  const fastify = Fastify(opts)

  fastify.register(import('./plugins/authenticate.js'), opts)

  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
