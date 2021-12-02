import buildServer from './index'

const fastify = buildServer()

const start = async function (): Promise<void> {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
// import Fastify from 'fastify'

// const fastify = Fastify({ logger: true })

// fastify.listen(3000)
