import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required()),
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
export default async function user(fastify) {
  fastify.get(
    '/',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
