import t from 'tap'
import sinon from 'sinon'
import errors from 'http-errors'
import Fastify from 'fastify'

const { test } = t

function buildServer(opts) {
  const server = Fastify()
  server.register(import('../../plugins/authenticate.js'), opts)
  return server
}

/**
 * @callback Authenticate
 * @param {Partial<import('fastify').FastifyRequest>} req
 * @param {Partial<import('fastify').FastifyReply>} reply
 */

test('authenticate', async t => {
  /**
   * @type {import('fastify').FastifyInstance & { authenticate?: Authenticate }})}
   */
  let fastify

  t.beforeEach(async () => {
    fastify = buildServer({ JWT_SECRET: 'supersecret' })
  })

  t.test('replies with error when authentication fails', async t => {
    const error = new errors.Unauthorized()
    const req = { jwtVerify: sinon.stub().rejects(error) }
    const reply = { send: sinon.stub() }

    await t.resolves(fastify.authenticate(req, reply))
    sinon.assert.calledWith(reply.send, error)
  })

  t.test(
    'resolves successfully when authentication succeeds',
    async t => {
      const req = { jwtVerify: sinon.stub().resolves() }
      const reply = { send: sinon.stub() }

      await t.resolves(fastify.authenticate(req, reply))
      sinon.assert.notCalled(reply.send)
    }
  )
})
