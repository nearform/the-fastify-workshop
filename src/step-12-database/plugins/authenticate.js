/**
 * @type {import('fastify').FastifyPluginAsync<{ JWT_SECRET: string }>}
 * */
async function authenticate(fastify, opts) {
  fastify.register(import('fastify-jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate
