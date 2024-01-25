import t from 'tap'
import fastify from 'fastify'
import sinon from 'sinon'
import errors from 'http-errors'

const { test } = t

function buildServer() {
  return fastify()
    .decorate('authenticate', sinon.stub())
    .register(import('../../routes/user/index.js'))
}

test('GET /', async t => {
  t.test('returns error when authentication fails', async t => {
    const fastify = buildServer()

    fastify.authenticate.rejects(errors.Unauthorized())

    const res = await fastify.inject('/')

    t.ok(fastify.authenticate.called)
    t.equal(res.statusCode, 401)
    t.teardown(() => fastify.close())
  })

  t.test(
    'returns current user when authentication succeeds',
    async t => {
      const fastify = buildServer()

      fastify.authenticate.callsFake(async request => {
        request.user = { username: 'alice' }
      })

      const res = await fastify.inject('/')

      t.equal(res.statusCode, 200)
      t.same(res.json(), { username: 'alice' })
      t.teardown(() => fastify.close())
    }
  )
})
