import { test } from 'node:test'
import assert from 'node:assert/strict'

import buildServer from '../index.js'

test('POST /login', async t => {
  await t.test(
    'returns 400 with an invalid post payload',
    async () => {
      const fastify = buildServer()

      const res = await fastify.inject({
        url: '/login',
        method: 'POST',
        body: {
          name: 'alice',
          passcode: 'alice',
        },
      })

      assert.equal(res.statusCode, 400)
    },
  )

  await t.test(
    'returns the data with valid post payload',
    async () => {
      const fastify = buildServer()

      const res = await fastify.inject({
        url: '/login',
        method: 'POST',
        body: {
          username: 'alice',
          password: 'alice',
        },
      })

      assert.equal(res.statusCode, 200)
      assert.deepEqual(res.json(), {
        username: 'alice',
        password: 'alice',
      })
    },
  )
})
