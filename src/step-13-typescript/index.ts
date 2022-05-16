import autoload from '@fastify/autoload'
import Fastify, { FastifyInstance } from 'fastify'
import path from 'path'
import type { EnvConfig } from './config'

function buildServer(config: EnvConfig): FastifyInstance {
  const opts = {
    logger: {
      level: config.LOG_LEVEL,
      prettyPrint: config.PRETTY_PRINT,
    },
  }

  const fastify = Fastify(opts)

  fastify.register(import('@fastify/postgres'), {
    connectionString: config.PG_CONNECTION_STRING
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: config,
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    options: config,
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
