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

export default async function users(fastify) {
  fastify.get(
    '/',
    { preValidation: [fastify.authenticate], schema },
    async () => {
      fastify.log.info('Users endpoint called.')

      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )

      return users
    }
  )
}
