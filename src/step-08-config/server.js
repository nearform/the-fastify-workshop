import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
