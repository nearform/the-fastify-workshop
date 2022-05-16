import Fastify from 'fastify'
import users from './routes/users.js'

const buildServer = () => {
  const fastify = Fastify({logger: {
    prettyPrint: true,
  }})
  // const fastify = Fastify()
  fastify.register(users)
  return fastify
}

export default buildServer
