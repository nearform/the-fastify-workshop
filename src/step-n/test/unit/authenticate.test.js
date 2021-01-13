'use strict'

const t = require('tap')
const sinon = require('sinon')
const { Unauthorized } = require('http-errors')

function buildServer(opts) {
  return require('fastify')().register(
    require('../../plugins/authenticate'),
    opts
  )
}

t.test('authenticate', async t => {
  t.test('replies with error when authentication fails', async t => {
    const fastify = await buildServer({
      JWT_SECRET: 'supersecret',
    })

    const error = Unauthorized()
    const req = { jwtVerify: sinon.stub().rejects(error) }
    const reply = { send: sinon.stub() }

    await t.resolves(fastify.authenticate(req, reply))
    sinon.assert.calledWith(reply.send, error)
  })

  t.test('resolves successfully when authentication succeeds', async t => {
    const fastify = await buildServer({
      JWT_SECRET: 'supersecret',
    })

    const req = { jwtVerify: sinon.stub().resolves() }
    const reply = { send: sinon.stub() }

    await t.resolves(fastify.authenticate(req, reply))
    sinon.assert.notCalled(reply.send)
  })
})
