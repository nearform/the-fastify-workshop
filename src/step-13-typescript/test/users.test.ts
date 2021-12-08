import t from 'tap'

import buildServer from '../index'
import config from '../config'

const { test } = t

test('GET /users', async t => {
  t.test('returns users', async t => {
    const fastify = buildServer(config)

    const res = await fastify.inject('/users')

    t.equal(res.statusCode, 200)

    t.same(await res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
