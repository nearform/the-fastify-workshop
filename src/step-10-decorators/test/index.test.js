import assert from 'node:assert'
import { test } from 'node:test'

import config from '../config.js'
import buildServer from '../index.js'

test('Startup', async t => {
  await t.test('it registers the JWT plugin', async () => {
    const fastify = buildServer(config)
    await fastify.ready()
    assert.ok(fastify.jwt)
  })
})
