const users = async (fastify) => {
  // fastify.get('/users', (req) => {
  //   req.log.info('Users route called')
  //   return [{ username: 'alice' }, { username: 'alice' }]
  // })

  fastify.route({
    method: 'GET',
    url: '/users',
    handler: (req) => {
      req.log.info('Users route called')
      return [{ username: 'alice' }, { username: 'alice' }]
    }
  })
}

export default users
