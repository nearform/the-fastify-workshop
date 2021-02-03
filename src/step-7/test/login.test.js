import t from 'tap'
import fastify from 'fastify'
import sinon from 'sinon'

const { test } = t

function buildServer() {
  return fastify()
    .decorate('jwt', { sign: sinon.stub() })
    .register(import('../routes/login.js'))
}

test('POST /login', async t => {
  t.test('returns 401 with an invalid post payload', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        name: 'alice',
        passcode: 'alice',
      },
    })

    t.strictEqual(res.statusCode, 401)
  })

  t.test('returns the data with valid post payload', async t => {
    const fastify = buildServer()

    fastify.jwt.sign.returns('jwt token')

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.strictEqual(res.statusCode, 200)
    t.strictEqual(await res.json(), {
      username: 'alice',
      password: 'alice',
    })
  })
})
