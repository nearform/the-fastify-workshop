import { Type, Static } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'

const BodySchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
})

type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
})

type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  body: BodySchema,
  response: {
    200: ResponseSchema
  }
}

export default async function login(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema },
    async (req: FastifyRequest<{ Body: BodySchema }>
  ): Promise<ResponseSchema> => {
    const { username, password } = req.body
    return { username, password }
  })
}
