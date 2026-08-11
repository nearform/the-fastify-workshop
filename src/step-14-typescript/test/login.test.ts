import assert from 'node:assert/strict'
import { test } from 'node:test'

import fastify, { FastifyInstance } from 'fastify'
import sinon from 'sinon'

import loginRoute from '../routes/login'

// The `jwt` decorator type, as Fastify sees it once `@fastify/jwt` is registered.
type Jwt = FastifyInstance['jwt']

function buildServer(): FastifyInstance {
  // These tests only exercise `sign`, so stub just that. Typing the stub against
  // the real signature keeps its arguments checked; the assertion then widens only
  // the container, since a one-key object can't satisfy all of `Jwt`.
  const sign = sinon.stub<Parameters<Jwt['sign']>, string>()
  const jwt = { sign } as unknown as Jwt

  return fastify().decorate('jwt', jwt).register(loginRoute)
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
