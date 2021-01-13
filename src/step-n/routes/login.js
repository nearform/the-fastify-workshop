'use strict'

const { Unauthorized } = require('http-errors')

const { loginSchema } = require('../services/schema')

module.exports = async function login(fastify) {
  fastify.post('/login', { schema: loginSchema }, async req => {
    const { username, password } = req.body

    if (!username || username !== password) {
      throw Unauthorized()
    }

    const {
      rows: [user],
    } = await fastify.pg.query(
      `
      SELECT id, username
      FROM users
      WHERE username = $1
      `,
      [username]
    )

    if (!user) {
      throw Unauthorized()
    }

    return { token: fastify.jwt.sign({ payload: user }) }
  })
}
