import buildServer from './index.js'

const start = () => {
  const fastify = buildServer()

  try {
    fastify.listen(3000)
  } catch(err) {
    fastify.log.error(err)
    process.exit(1)
  }  
}

start();
