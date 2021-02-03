import Fastify from 'fastify'

function buildServer(opts) {
  const fastify = Fastify(opts)

  fastify.register(import('fastify-jwt'), {
    secret: opts.JWT_SECRET,
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is ready to go!')

  return fastify
}

export default buildServer
