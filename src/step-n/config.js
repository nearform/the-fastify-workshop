import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('PG_CONNECTION_STRING', S.string().required())
  .prop('JWT_SECRET', S.string().required())

export default envSchema({
  schema,
  dotenv: true,
})
