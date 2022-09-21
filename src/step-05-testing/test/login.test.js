import t from 'tap'

const { test } = t

import buildServer from '../index.js'

test('POST /login', async t => {
  t.test('returns 400 with an invalid post payload', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        name: 'alice',
        passcode: 'alice',
      },
    })

    t.equal(res.statusCode, 400)
  })

  t.test('returns the data with valid post payload', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.equal(res.statusCode, 200)
    t.same(res.json(), {
      username: 'alice',
      password: 'alice',
    })
  })
})
