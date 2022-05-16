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
const loginSchema = {
  body: Type.Object({
    username: Type.String(),
    password:Type.String(),
  }),
  response: {
    ...commonResponses,
    200: Type.Object({
      username: Type.String(),
      password:Type.String(),
    })
  },
}

/**
 * @type {import('fastify').FastifyPluginAsync}
 * */
export default async function login(fastify) {
  fastify.post(
    '/login',
    { schema: loginSchema },
    /**
     * @type {import('fastify').RouteHandler<{ Body: { username: string; password: string } }>}
     * */
    async req => {
    const { username, password } = req.body
    return { username, password }
  })
}
