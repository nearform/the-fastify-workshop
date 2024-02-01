import assert from 'node:assert'
import { test } from 'node:test'

import errors from 'http-errors'
import sinon, { SinonStub } from 'sinon'

import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from 'fastify'

import pluginAuthenticate from '../plugins/authenticate'

async function buildServer(opts: {
  JWT_SECRET: string
}): Promise<FastifyInstance> {
  const app = fastify()
  await app.register(pluginAuthenticate, opts)
  return app
}

test('authenticate', async t => {
  await t.test(
    'replies with error when authentication fails',
    async () => {
      const fastify = await buildServer({
        JWT_SECRET: 'supersecret',
      })
      const error = new errors.Unauthorized()
      const req = <FastifyRequest>{}
      req.jwtVerify = sinon.stub().rejects(error)
      const reply = <FastifyReply>{}
      reply.send = sinon.stub()

      await assert.doesNotReject(fastify.authenticate(req, reply))
      sinon.assert.calledWith(<SinonStub>reply.send, error)
    },
  )

  await t.test(
    'resolves successfully when authentication succeeds',
    async () => {
      const fastify = await buildServer({
        JWT_SECRET: 'supersecret',
      })

      const req = <FastifyRequest>{}
      req.jwtVerify = sinon.stub().resolves()
      const reply = <FastifyReply>{}
      reply.send = sinon.stub()

      await assert.doesNotReject(fastify.authenticate(req, reply))
      sinon.assert.notCalled(<SinonStub>reply.send)
    },
  )
})
