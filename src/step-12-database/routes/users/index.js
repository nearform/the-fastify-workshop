import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object()
        .prop('id', S.integer().required())
        .prop('username', S.string().required())
    ),
  },
}

/**
 * @callback Authenticate
 * @param {Partial<import('fastify').FastifyRequest>} req
 * @param {Partial<import('fastify').FastifyReply>} reply
 */

/**
 * @type {import('fastify').FastifyPluginAsync}
 * @param {import('fastify').FastifyInstance & { authenticate: Authenticate}} fastify
 * */
export default async function users(fastify) {
  fastify.get(
    '/',
    { onRequest: [fastify.authenticate], schema },
    async req => {
      req.log.info('Users route called')

      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )

      return users
    }
  )
}
