import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify'
import loginRoute from './routes/login'
import usersRoute from './routes/users'
import authenticatePlugin from './plugins/authenticate'

function buildServer(config: Record<string, unknown>): FastifyInstance {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
      prettyPrint: config.PRETTY_PRINT,
    },
  }

  const fastify = Fastify(opts as unknown as FastifyServerOptions)

  fastify.register(authenticatePlugin, opts)
  fastify.register(loginRoute)
  fastify.register(usersRoute)

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
