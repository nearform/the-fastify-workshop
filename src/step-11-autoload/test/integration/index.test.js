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

  t.test('authenticates user and returns current user', async t => {
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

    const userRes = await fastify.inject({
      url: '/user',
      headers: {
        authorization: `bearer ${token}`,
      },
    })

    t.equal(userRes.statusCode, 200)

    const user = await userRes.json()

    t.same(user, { username: 'alice' })
  })
})
