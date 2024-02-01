import assert from 'node:assert/strict'
import { test } from 'node:test'

import config from '../config'
import buildServer from '../index'

test('GET /users', async t => {
  await t.test('returns users', async () => {
    const fastify = buildServer(config)

    const res = await fastify.inject('/users')

    assert.equal(res.statusCode, 200)
    assert.deepEqual(res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
