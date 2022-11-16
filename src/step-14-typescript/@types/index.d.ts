import type { FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
  }
}
