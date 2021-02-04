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
  t.test('returns 400 with missing credentials', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
    })

    t.strictEqual(res.statusCode, 400)
  })

  t.test('returns 400 with partial credentials', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
      },
    })

    t.strictEqual(res.statusCode, 400)
  })

  t.test('returns 401 with wrong credentials', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'wrong password',
      },
    })

    t.strictEqual(res.statusCode, 401)
  })

  t.test('obtains a token with right credentials', async t => {
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
    t.strictEqual((await res.json()).token, 'jwt token')
  })
})
