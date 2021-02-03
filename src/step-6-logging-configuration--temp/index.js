import { join } from 'desm'
import Fastify from 'fastify'
import autoload from 'fastify-autoload'

function buildServer(opts) {
  const config = {
    ...opts,
    logger: {
      level: opts.LOG_LEVEL,
      file: opts.LOG_FILE,
      redact: [
        'req.remoteAddress'
      ],
    }
  }

  const fastify = Fastify(config)

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
