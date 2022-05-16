import { Type } from '@sinclair/typebox'

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
const userResponse = Type.Array(Type.Object({
  username: Type.String(),
}))

export const headers = Type.Object({
  accept: Type.Optional(Type.RegEx(/\*\/\*|application\/json/)),
})

export const schema = {
  security: [{ apiKey: [] }],
  tags: ['countries'],
  operationId: 'getCountries',
  produces: ['application/json'],
  response: {
    ...commonResponses,
    200: userResponse,
  },
}

/**
 * @type {import('fastify').FastifyPluginAsync}
 * */
export default async function users(fastify) {
  fastify.route({
    method: 'GET',
    url: '/users',
    schema,
    handler: async () => {
      return [{ username: 'alice' }, { username: 'bob'}]
    },
  })
}
