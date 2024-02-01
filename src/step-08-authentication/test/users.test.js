import assert from 'node:assert/strict'
import { test } from 'node:test'

import buildServer from '../index.js'

test('GET /users', async t => {
  await t.test('returns users', async () => {
    const fastify = buildServer()

    const res = await fastify.inject('/users')

    assert.equal(res.statusCode, 200)

    assert.deepEqual(res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
