import fastify from 'fastify'
import sinon from 'sinon'
import errors from 'http-errors'

import { test } from 'node:test'
import assert from 'node:assert'

function buildServer() {
  return fastify()
    .decorate('authenticate', sinon.stub())
    .register(import('../../routes/user/index.js'))
}

test('GET /', async t => {
  await t.test('returns error when authentication fails', async t => {
    const fastify = buildServer()

    fastify.authenticate.rejects(errors.Unauthorized())

    const res = await fastify.inject('/')

    sinon.assert.called(fastify.authenticate)
    assert.equal(res.statusCode, 401)
    await fastify.close()
  })

  await t.test(
    'returns current user when authentication succeeds',
    async t => {
      const fastify = buildServer()

      fastify.authenticate.callsFake(async request => {
        request.user = { username: 'alice' }
      })

      const res = await fastify.inject('/')

      assert.equal(res.statusCode, 200)
      assert.deepEqual(res.json(), { username: 'alice' })
      await fastify.close()
    },
  )
})
