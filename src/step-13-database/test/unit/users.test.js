import assert from 'node:assert/strict'
import { test } from 'node:test'

import fastify from 'fastify'
import errors from 'http-errors'
import sinon from 'sinon'

function buildServer() {
  return fastify()
    .decorate('pg', { query: sinon.stub() })
    .decorate('authenticate', sinon.stub())
    .register(import('../../routes/users/index.js'))
}

test('GET /', async t => {
  await t.test(
    'returns error when authentication fails',
    async () => {
      const fastify = buildServer()

      fastify.authenticate.rejects(errors.Unauthorized())

      const res = await fastify.inject('/')

      sinon.assert.called(fastify.authenticate)
      assert.equal(res.statusCode, 401)
      await fastify.close()
    },
  )

  await t.test('returns error when database errors', async () => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.rejects(new Error('database error'))

    const res = await fastify.inject('/')

    assert.equal(res.statusCode, 500)
    await fastify.close()
  })

  await t.test('returns users loaded from the database', async () => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.resolves({
      rows: [{ id: 1, username: 'alice' }],
    })

    const res = await fastify.inject('/')

    assert.equal(res.statusCode, 200)
    assert.deepEqual(res.json(), [{ id: 1, username: 'alice' }])
    await fastify.close()
  })
})
