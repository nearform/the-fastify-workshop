import buildServer from '../../index.js'
import config from '../../config.js'

import { test } from 'node:test'
import assert from 'node:assert'

test('server', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = buildServer(config)
  })

  t.afterEach(() => fastify && fastify.close())

  await t.test(
    'authenticates user and returns current user',
    async t => {
      const loginRes = await fastify.inject({
        url: '/login',
        method: 'POST',
        body: {
          username: 'alice',
          password: 'alice',
        },
      })

      const { token } = await loginRes.json()

      assert.equal(loginRes.statusCode, 200)
      assert.equal(typeof token, 'string')

      const userRes = await fastify.inject({
        url: '/user',
        headers: {
          authorization: `bearer ${token}`,
        },
      })

      assert.equal(userRes.statusCode, 200)
      assert.deepEqual(userRes.json(), { username: 'alice' })
    },
  )
})
