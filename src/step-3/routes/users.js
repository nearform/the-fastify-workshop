import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object().prop('username', S.string().required())
    ),
  },
}

export default async function users(fastify) {
  fastify.get(
    '/users',
    {
      schema,
    },
    async () => {
      fastify.log.info('Users enpoint called.')

      return [{ username: 'alice' }, { username: 'bob' }]
    }
  )
}
