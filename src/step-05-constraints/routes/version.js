/**
 * @type {import('fastify').FastifyPluginAsync}
 * */
export default async function version(fastify) {
  fastify.route({
    method: 'GET',
    url: '/version',
    constraints: { version: '1.0.0' },
    handler: async () => {
      return { version: '1.0.0' }
    },
  })
}
