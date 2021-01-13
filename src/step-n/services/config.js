'use strict'

const envSchema = require('env-schema')
const S = require('fluent-json-schema')

const schema = S.object()
  .prop('PG_CONNECTION_STRING', S.string().required())
  .prop('JWT_SECRET', S.string().required())

module.exports = envSchema({
  schema,
  dotenv: true,
})
