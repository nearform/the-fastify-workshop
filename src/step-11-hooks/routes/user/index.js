import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required()),
  },
}

export default async function user(fastify) {
  fastify.get(
    '/user',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
