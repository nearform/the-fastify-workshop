import Fastify, { FastifyInstance } from 'fastify'
import loginRoute from './routes/login'
import usersRoute from './routes/users'
import authenticatePlugin from './plugins/authenticate'
import type { EnvConfig } from './config'

function buildServer(config: EnvConfig): FastifyInstance {
  const opts = {
    logger: {
      level: config.LOG_LEVEL,
      prettyPrint: config.PRETTY_PRINT,
    },
  }

  const fastify = Fastify(opts)

  fastify.register(authenticatePlugin, config)
  fastify.register(loginRoute)
  fastify.register(usersRoute)

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
