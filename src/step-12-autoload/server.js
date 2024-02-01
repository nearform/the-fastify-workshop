import config from './config.js'

import buildServer from './index.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
