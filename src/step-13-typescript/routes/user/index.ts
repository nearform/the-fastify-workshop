import { Type } from '@sinclair/typebox'
import { FastifyInstance } from 'fastify'

const commonResponses = {
  404: Type.String({
    description: 'Not Found',
    example: 'Not Found',
  }),
  406: Type.String({
    description: 'Not Acceptable',
    example: 'Not Acceptable',
  }),
  500: Type.String({
    description: 'Internal server error',
    example: 'Internal server error',
  }),
}

const schema = {
  response: {
    ...commonResponses,
    200: Type.Object({
      username: Type.String()
    })
  },
}

export default async function user(fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
