import assert from 'node:assert'
import { test } from 'node:test'

import fastify from 'fastify'
import errors from 'http-errors'
import sinon from 'sinon'



function buildServer(opts) {
  return fastify().register(
    import('../plugins/authenticate.js'),
    opts,
  )
}

await test('authenticate', async t => {
  await t.test(
    'replies with error when authentication fails',
    async () => {
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
    async () => {
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
