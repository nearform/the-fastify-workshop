'use strict'

const path = require('path')
const autoload = require('fastify-autoload')

const config = require('./services/config')

function buildServer(options) {
  const fastify = require('fastify')(options)

  fastify.register(require('fastify-postgres'), {
    connectionString: config.PG_CONNECTION_STRING,
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: config,
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    options: config,
  })

  return fastify
}

module.exports = buildServer
