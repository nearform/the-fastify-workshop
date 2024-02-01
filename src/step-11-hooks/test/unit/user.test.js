import assert from 'node:assert/strict'
import { test } from 'node:test'

import fastify from 'fastify'
import errors from 'http-errors'
import sinon from 'sinon'

function buildServer() {
  return fastify()
    .decorate('authenticate', sinon.stub())
    .register(import('../../routes/user/index.js'))
}

test('GET /user', async t => {
  await t.test(
    'returns error when authentication fails',
    async () => {
      const fastify = buildServer()

      fastify.authenticate.rejects(errors.Unauthorized())

      const res = await fastify.inject('/user')

      sinon.assert.called(fastify.authenticate)
      assert.equal(res.statusCode, 401)
    },
  )

  await t.test(
    'returns current user when authentication succeeds',
    async () => {
      const fastify = buildServer()

      fastify.authenticate.callsFake(async request => {
        request.user = { username: 'alice' }
      })

      const res = await fastify.inject('/user')

      assert.equal(res.statusCode, 200)
      assert.deepEqual(res.json(), { username: 'alice' })
    },
  )
})
