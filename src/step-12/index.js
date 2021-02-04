import { join } from 'desm'
import Fastify from 'fastify'
import autoload from 'fastify-autoload'

function buildServer(opts) {
  const fastify = Fastify(opts)

  fastify.register(import('fastify-postgres'), {
    connectionString: opts.PG_CONNECTION_STRING,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options: opts,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: opts,
  })

  return fastify
}

export default buildServer
