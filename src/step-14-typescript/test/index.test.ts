import t from 'tap'
import sinon from 'sinon'
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
    const sendStub = sinon.stub()
    reply.send = sendStub

    await t.resolves(fastify.authenticate(req, reply))
    t.same(sendStub.firstCall.args, [error])
    t.teardown(() => fastify.close())
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
      const sendStub = sinon.stub()
      reply.send = sendStub

      await t.resolves(fastify.authenticate(req, reply))
      t.ok(sendStub.notCalled)
      t.teardown(() => fastify.close())
    }
  )
})
