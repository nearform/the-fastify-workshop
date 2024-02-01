import { test } from 'node:test'
import assert from 'node:assert'

import buildServer from '../../index.js'
import config from '../../config.js'

test('Startup', async t => {
  await t.test('it registers the JWT plugin', async () => {
    const fastify = buildServer(config)

    await fastify.ready()

    assert.ok(fastify.jwt)
    await fastify.close()
  })
})
