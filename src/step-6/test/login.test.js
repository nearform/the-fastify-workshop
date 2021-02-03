import t from 'tap'
import fastify from 'fastify'

const { test } = t

function buildServer() {
  return fastify()
    .register(import('../routes/login.js'))
}

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

    t.strictEqual(res.statusCode, 400)
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

    t.strictEqual(res.statusCode, 200)
    t.equivalent(await res.json(), {
      username: 'alice',
      password: 'alice',
    })
  })
})
