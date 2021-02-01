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
    async (request) => {
      request.log.info('About to load the users')

      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )

      request.log.error(new Error('What an error!!'))

      return users
    }
  )
}
