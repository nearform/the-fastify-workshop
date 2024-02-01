import assert from 'node:assert/strict'
import { test } from 'node:test'

import fastify, { FastifyInstance } from 'fastify'
import sinon from 'sinon'
import loginRoute from '../routes/login'

function buildServer(): FastifyInstance {
  return fastify()
    .decorate('jwt', { sign: sinon.stub() })
    .register(loginRoute)
}

test('POST /login', async t => {
  await t.test('returns 400 with missing credentials', async () => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
    })

    assert.equal(res.statusCode, 400)
  })

  await t.test('returns 400 with partial credentials', async () => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
      },
    })

    assert.equal(res.statusCode, 400)
  })

  await t.test('returns 401 with wrong credentials', async () => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
        password: 'wrong password',
      },
    })

    assert.equal(res.statusCode, 401)
  })

  await t.test('obtains a token with right credentials', async () => {
    const app = buildServer()

    app.jwt.sign = sinon.stub().returns('jwt token')

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
        password: 'alice',
      },
    })

    assert.equal(res.statusCode, 200)
    assert.equal(res.json().token, 'jwt token')
  })
})
