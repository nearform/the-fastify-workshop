import buildServer from './index'
import configSchema from './config'

const fastify = buildServer(configSchema)

const start = async function (): Promise<void> {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
