import t from 'tap'
import fastify, { FastifyInstance } from 'fastify'
import sinon from 'sinon'
import loginRoute from '../routes/login'

function buildServer(): FastifyInstance {
  return fastify()
    .decorate('jwt', { sign: sinon.stub() })
    .register(loginRoute)
}

t.test('POST /login', async t => {
  t.test('returns 400 with missing credentials', async t => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
    })

    t.equal(res.statusCode, 400)
  })

  t.test('returns 400 with partial credentials', async t => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
      },
    })

    t.equal(res.statusCode, 400)
  })

  t.test('returns 401 with wrong credentials', async t => {
    const app = buildServer()

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
        password: 'wrong password',
      },
    })

    t.equal(res.statusCode, 401)
  })

  t.test('obtains a token with right credentials', async t => {
    const app = buildServer()

    app.jwt.sign = sinon.stub().returns('jwt token')

    const res = await app.inject({
      url: '/login',
      method: 'POST',
      payload: {
        username: 'alice',
        password: 'alice',
      },
    })

    t.equal(res.statusCode, 200)
    t.equal((await res.json()).token, 'jwt token')
  })
})
