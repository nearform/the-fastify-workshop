import buildServer from '../index.js'

import { test } from 'node:test'
import assert from 'node:assert'

test('GET /users', async t => {
  await t.test('returns users', async t => {
    const fastify = buildServer()

    const res = await fastify.inject('/users')

    assert.equal(res.statusCode, 200)

    assert.deepEqual(res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
