import t from 'tap'
import sinon, { SinonStub } from 'sinon'
import errors from 'http-errors'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import pluginAuthenticate from '../plugins/authenticate'

async function buildServer(opts: { JWT_SECRET: string }): Promise<FastifyInstance> {
  const app = fastify()
  await app.register(pluginAuthenticate, opts)
  return app
}

t.test('authenticate', async (t) => {
  t.test('replies with error when authentication fails', async (t) => {
    const fastify = await buildServer({
      JWT_SECRET: 'supersecret',
    })
    const error = new errors.Unauthorized()
    const req = <FastifyRequest>{}
    req.jwtVerify = sinon.stub().rejects(error)
    const reply = <FastifyReply>{}
    reply.send = sinon.stub()

    await t.resolves(fastify.authenticate(req, reply))
    sinon.assert.calledWith(<SinonStub>reply.send, error)
  })

  t.test(
    'resolves successfully when authentication succeeds',
    async t => {
      const fastify = await buildServer({
        JWT_SECRET: 'supersecret',
      })

      const req = <FastifyRequest>{}
      req.jwtVerify = sinon.stub().resolves()
      const reply = <FastifyReply>{}
      reply.send = sinon.stub()

      await t.resolves(fastify.authenticate(req, reply))
      sinon.assert.notCalled(<SinonStub>reply.send)
    }
  )
})
