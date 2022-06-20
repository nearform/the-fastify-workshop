import Fastify from 'fastify'

const start = async function () {
  const fastify = Fastify()

  fastify.get('/', async () => {
    return { hello: 'world' }
  })

  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
