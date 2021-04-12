import t from 'tap'
import fastify from 'fastify'
import sinon from 'sinon'
import errors from 'http-errors'

const { test } = t

function buildServer() {
  return fastify()
    .decorate('pg', { query: sinon.stub() })
    .decorate('authenticate', sinon.stub())
    .register(import('../../routes/users/index.js'))
}

test('GET /', async t => {
  t.test('returns error when authentication fails', async t => {
    const fastify = buildServer()

    fastify.authenticate.rejects(errors.Unauthorized())

    const res = await fastify.inject('/')

    sinon.assert.called(fastify.authenticate)
    t.equal(res.statusCode, 401)
  })

  t.test('returns error when database errors', async t => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.rejects(new Error('database error'))

    const res = await fastify.inject('/')

    t.equal(res.statusCode, 500)
  })

  t.test('returns users loaded from the database', async t => {
    const fastify = buildServer()

    fastify.authenticate.resolves()
    fastify.pg.query.resolves({
      rows: [{ id: 1, username: 'alice' }],
    })

    const res = await fastify.inject('/')

    t.equal(res.statusCode, 200)
    t.same(await res.json(), [{ id: 1, username: 'alice' }])
  })
})
