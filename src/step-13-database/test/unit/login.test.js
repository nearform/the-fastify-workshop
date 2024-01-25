import t from 'tap'
import fastify from 'fastify'
import sinon from 'sinon'

const { test } = t

function buildServer() {
  return fastify()
    .decorate('pg', { query: sinon.stub() })
    .decorate('jwt', { sign: sinon.stub() })
    .register(import('../../routes/login.js'))
}

test('POST /login', async t => {
  t.test('returns 400 with missing credentials', async t => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
    })

    t.equal(res.statusCode, 400)
    t.teardown(() => fastify.close())
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

    t.equal(res.statusCode, 400)
    t.teardown(() => fastify.close())
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

    t.equal(res.statusCode, 401)
    t.teardown(() => fastify.close())
  })

  t.test(
    'returns 401 when user is not found in database',
    async t => {
      const fastify = buildServer()

      fastify.pg.query.resolves({ rows: [] })

      const res = await fastify.inject({
        url: '/login',
        method: 'POST',
        body: {
          username: 'alice',
          password: 'alice',
        },
      })

      t.equal(res.statusCode, 401)
      t.teardown(() => fastify.close())
    }
  )

  t.test('returns 500 when database errors', async t => {
    const fastify = buildServer()

    fastify.pg.query.rejects(new Error('boom'))

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.equal(res.statusCode, 500)
    t.teardown(() => fastify.close())
  })

  t.test('obtains a token with right credentials', async t => {
    const fastify = buildServer()

    fastify.pg.query.resolves({
      rows: [{ id: 1, username: 'alice' }],
    })
    fastify.jwt.sign.returns('jwt token')

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.equal(res.statusCode, 200)
    t.equal(res.json().token, 'jwt token')
    t.teardown(() => fastify.close())
  })

  t.test('stores the signed JWT', async () => {
    const fastify = buildServer()

    fastify.pg.query.resolves({
      rows: [{ id: 1, username: 'alice' }],
    })
    fastify.jwt.sign.returns('jwt token')

    await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.ok(fastify.jwt.sign.called)
    t.same(fastify.jwt.sign.firstCall.args, [{
      username: 'alice'
    }])
    t.teardown(() => fastify.close())
  })
})
