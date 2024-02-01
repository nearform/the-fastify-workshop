import assert from 'node:assert'
import { test } from 'node:test'

import config from '../config'
import buildServer from '../index'

test('Startup', async t => {
  await t.test('it registers the JWT plugin', async () => {
    const fastify = buildServer(config)

    await fastify.ready()

    assert.ok(fastify.jwt)
  })
})
