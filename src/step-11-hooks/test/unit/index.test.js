import { test } from 'tap'

import buildServer from '../../index.js'
import config from '../../config.js'

test('Startup', async t => {
  t.test('it registers the JWT plugin', async t => {
    const fastify = buildServer(config)

    await fastify.ready()

    t.ok(fastify.jwt)
  })
})

