import sinon from 'sinon'
import errors from 'http-errors'
import fastify from 'fastify'

import { test } from 'node:test'
import assert from 'node:assert'

function buildServer(opts) {
  return fastify().register(
    import('../plugins/authenticate.js'),
    opts,
  )
}

await test('authenticate', async t => {
  await t.test(
    'replies with error when authentication fails',
    async t => {
      const fastify = await buildServer({
        JWT_SECRET: 'supersecret',
      })

      await fastify.ready()

      const error = errors.Unauthorized()

      const req = { jwtVerify: sinon.stub().rejects(error) }
      const reply = { send: sinon.stub() }
      await assert.doesNotReject(fastify.authenticate(req, reply))
      sinon.assert.calledWith(reply.send, error)
    },
  )

  await t.test(
    'resolves successfully when authentication succeeds',
    async t => {
      const fastify = await buildServer({
        JWT_SECRET: 'supersecret',
      })
      const req = { jwtVerify: sinon.stub().resolves() }
      const reply = { send: sinon.stub() }
      await assert.doesNotReject(fastify.authenticate(req, reply))
      sinon.assert.notCalled(reply.send)
    },
  )
})
