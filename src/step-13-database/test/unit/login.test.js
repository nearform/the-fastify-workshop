import assert from 'node:assert'
import { test } from 'node:test'

import fastify from 'fastify'
import sinon from 'sinon'

function buildServer() {
  return fastify()
    .decorate('pg', { query: sinon.stub() })
    .decorate('jwt', { sign: sinon.stub() })
    .register(import('../../routes/login.js'))
}

test('POST /login', async t => {
  await t.test('returns 400 with missing credentials', async () => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
    })

    assert.equal(res.statusCode, 400)
    await fastify.close()
  })

  await t.test('returns 400 with partial credentials', async () => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
      },
    })

    assert.equal(res.statusCode, 400)
    await fastify.close()
  })

  await t.test('returns 401 with wrong credentials', async () => {
    const fastify = buildServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'wrong password',
      },
    })

    assert.equal(res.statusCode, 401)
    await fastify.close()
  })

  await t.test(
    'returns 401 when user is not found in database',
    async () => {
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

      assert.equal(res.statusCode, 401)
      await fastify.close()
    },
  )

  await t.test('returns 500 when database errors', async () => {
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

    assert.equal(res.statusCode, 500)
    await fastify.close()
  })

  await t.test('obtains a token with right credentials', async () => {
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

    assert.equal(res.statusCode, 200)
    assert.equal(res.json().token, 'jwt token')
    await fastify.close()
  })

  await t.test('stores the signed JWT', async () => {
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

    sinon.assert.called(fastify.jwt.sign)
    sinon.assert.calledWith(fastify.jwt.sign, {
      username: 'alice',
    })
    await fastify.close()
  })
})
