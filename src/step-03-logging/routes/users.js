export default async function users(fastify) {
  fastify.get('/users', async (req) => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
