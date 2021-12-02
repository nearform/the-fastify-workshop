import { join } from 'path'
import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())

export default envSchema({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})
