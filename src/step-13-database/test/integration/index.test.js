import t from 'tap'

import buildServer from '../../index.js'
import config from '../../config.js'

const { test } = t

test('server', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = buildServer(config)
  })

  t.teardown(() => fastify.close())

  t.test('authenticates users and lists users', async t => {
    const loginRes = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    const { token } = await loginRes.json()

    t.equal(loginRes.statusCode, 200)
    t.type(token, 'string')

    const usersRes = await fastify.inject({
      url: '/users',
      headers: {
        authorization: `bearer ${token}`,
      },
    })

    t.equal(usersRes.statusCode, 200)

    const users = await usersRes.json()

    t.ok(Array.isArray(users))

    t.same(users, [
      { id: 1, username: 'alice' },
      { id: 2, username: 'bob' },
    ])

    fastify.close()
  })
})
