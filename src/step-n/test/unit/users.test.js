'use strict'

const t = require('tap')
const sinon = require('sinon')
const { Unauthorized } = require('http-errors')

function buildServer() {
  return require('fastify')()
    .decorate('pg', { query: sinon.stub() })
    .decorate('authenticate', sinon.stub())
    .register(require('../../routes/users'))
}

t.test('/users', async t => {
  t.test('returns error when authentication fails', async t => {
    const fastify = buildServer()

    fastify.authenticate.rejects(Unauthorized())

    const res = await fastify.inject('/users')

    sinon.assert.called(fastify.authenticate)
    t.strictEqual(res.statusCode, 401)
  })

  t.test('returns error when database errors', async t => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.rejects(new Error('database error'))

    const res = await fastify.inject('/users')

    t.strictEqual(res.statusCode, 500)
  })

  t.test('returns users loaded from the database', async t => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.resolves({ rows: [{ id: 1, username: 'alice' }] })

    const res = await fastify.inject('/users')

    t.strictEqual(res.statusCode, 200)
    t.equivalent(await res.json(), [{ id: 1, username: 'alice' }])
  })
})
