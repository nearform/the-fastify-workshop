export default async function users(fastify) {
  fastify.get('/users', async () => {
    fastify.log.info('Users endpoint called.')
    return [{ username: 'alice' }, { username: 'bob' }]
  })
}