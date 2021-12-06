import t from 'tap'

import buildServer from '../index'
import config from '../config'

t.test('Startup', async t => {
  t.test('it registers the JWT plugin', async t => {
    const fastify = buildServer(config)

    await fastify.ready()

    t.ok(fastify.jwt)
  })
})

