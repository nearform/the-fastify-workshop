'use strict'

const { usersSchema } = require('../services/schema')

module.exports = async function users(fastify) {
  fastify.get(
    '/users',
    {
      preValidation: [fastify.authenticate],
      schema: usersSchema,
    },
    async () => {
      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )

      return users
    }
  )
}
