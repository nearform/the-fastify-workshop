import errors from 'http-errors'
import S from 'fluent-json-schema'
import SQL from '@nearform/sql'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object().prop('token', S.string().required()),
  },
}

/**
 * @type {import('fastify').FastifyPluginAsync<{ JWT_SECRET: string }>}
 * */
export default async function login(fastify) {
  fastify.post(
    '/login',
    { schema },
    /**
     * @type {import('fastify').RouteHandler<{ Body: { username: string; password: string } }>}
     * */
    async req => {
      const { username, password } = req.body

      // sample auth check
      if (username !== password) {
        throw new errors.Unauthorized()
      }

      const {
        rows: [user],
      } = await fastify.pg.query(
        SQL`SELECT id, username FROM users WHERE username = ${username}`
      )

      if (!user) {
        throw new errors.Unauthorized()
      }

      return { token: fastify.jwt.sign({ username }) }
    }
  )
}
