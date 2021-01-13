'use strict'

const t = require('tap')

const buildServer = require('../../server')

t.test('server', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = buildServer()
  })

  t.tearDown(() => fastify.close())

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

    t.strictEqual(loginRes.statusCode, 200)
    t.type(token, 'string')

    const usersRes = await fastify.inject({
      url: '/users',
      headers: {
        authorization: `bearer ${token}`,
      },
    })

    t.strictEqual(usersRes.statusCode, 200)

    const users = await usersRes.json()

    t.ok(Array.isArray(users))

    t.equivalent(users, [
      { id: 1, username: 'alice' },
      { id: 2, username: 'bob' },
    ])

    fastify.close()
  })
})
