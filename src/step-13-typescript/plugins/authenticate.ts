import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'
import fastifyJwt from 'fastify-jwt'
import fp from 'fastify-plugin'

async function authenticate(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> {
  fastify.register(fastifyJwt, {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

export default fp(authenticate)
