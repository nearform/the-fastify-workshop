import configSchema from './config'

import buildServer from './index'

const fastify = buildServer(configSchema)

const start = async function (): Promise<void> {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
