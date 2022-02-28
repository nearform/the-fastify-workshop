/**
 * @type {import('fastify').FastifyPluginAsync}
 *
 */
export default async function users(fastify) {
  fastify.get('/users', async () => [
    { username: 'alice' },
    { username: 'bob' },
  ])
}
