import assert from 'node:assert'
import { test } from 'node:test'

import fastify from 'fastify'
import sinon from 'sinon'

function buildServer() {
  return fastify()
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
  })

  await t.test('obtains a token with right credentials', async () => {
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

    assert.equal(res.statusCode, 200)
    assert.equal(res.json().token, 'jwt token')
  })
})
