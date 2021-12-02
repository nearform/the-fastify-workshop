import { Static, Type } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'

const ResponseSchema = Type.Object({
  username: Type.String(),
})

type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  response: ResponseSchema
}

export default async function users(fastify: FastifyInstance) {
  fastify.get(
    '/users',
    { schema },
    async (req: FastifyRequest): Promise<ResponseSchema[]> => {
      req.log.info('Users route called')

      return [{ username: 'alice' }, { username: 'bob' }]
    }
  )
}
