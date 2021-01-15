import { join } from 'desm'
import Fastify from 'fastify'
import autoload from 'fastify-autoload'
import fastifyPostgres from 'fastify-postgres'

function buildServer(options) {
  const fastify = Fastify(options)

  fastify.register(fastifyPostgres, {
    connectionString: options.PG_CONNECTION_STRING,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options,
  })

  return fastify
}

export default buildServer
