import assert from 'node:assert'
import { test } from 'node:test'

import config from '../../config.js'
import buildServer from '../../index.js'

test('server', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = buildServer(config)
  })

  t.afterEach(() => fastify.close())

  await t.test('authenticates users and lists users', async () => {
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

    const usersRes = await fastify.inject({
      url: '/users',
      headers: {
        authorization: `bearer ${token}`,
      },
    })

    assert.equal(usersRes.statusCode, 200)

    const users = await usersRes.json()

    assert.ok(Array.isArray(users))

    assert.deepEqual(users, [
      { id: 1, username: 'alice' },
      { id: 2, username: 'bob' },
    ])

    fastify.close()
  })
})
