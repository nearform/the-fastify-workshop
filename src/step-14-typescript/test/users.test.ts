import { test } from 'node:test'
import assert from 'node:assert'
import buildServer from '../index'
import config from '../config'

test('GET /users', async t => {
  await t.test('returns users', async t => {
    const fastify = buildServer(config)

    const res = await fastify.inject('/users')

    assert.equal(res.statusCode, 200)
    assert.deepEqual(res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
