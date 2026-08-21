import assert from 'node:assert/strict'
import { test } from 'node:test'

import { SignOptions, SignPayloadType } from '@fastify/jwt'
import fastify, { FastifyInstance } from 'fastify'
import sinon from 'sinon'

import loginRoute from '../routes/login'

// The `jwt` decorator type, as Fastify sees it once `@fastify/jwt` is registered.
type Jwt = FastifyInstance['jwt']

function buildServer(): FastifyInstance {
  // These tests only exercise `sign`, so stub just that, typed to the one overload
  // the route uses: `sign(payload)` returning the token. `Parameters<Jwt['sign']>`
  // would look tidier but resolves to the *last* of `sign`'s three overloads — the
  // callback one, which returns `void` — so the stub would reject the single-argument
  // call in `routes/login.ts`.
  const sign = sinon
    .stub<[SignPayloadType, Partial<SignOptions>?], string>()
    .returns('jwt token')

  // A single-signature stub can't satisfy all three overloads, so an assertion is
  // unavoidable. Keep it on the container only: `sign`'s own arguments stay checked.
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
