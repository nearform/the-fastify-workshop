async function authenticate(fastify, opts) {
  fastify.register(import('fastify-jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req, reply) => {
    console.log(77777, req)
    try {
      await req.jwtVerify()
    } catch (err) {
      console.log(11111, err)
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate
