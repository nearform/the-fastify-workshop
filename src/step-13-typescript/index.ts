import Fastify, { FastifyInstance } from 'fastify'
import loginRoute from './routes/login'
import usersRoute from './routes/users'
import authenticatePlugin from './plugins/authenticate'

function buildServer(): FastifyInstance {
  const fastify = Fastify({
    logger: {
      prettyPrint: true,
    },
  })

  fastify.register(authenticatePlugin)
  fastify.register(loginRoute)
  fastify.register(usersRoute)

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
