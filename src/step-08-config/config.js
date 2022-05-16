import { join } from 'desm'
import envSchema from 'env-schema'
import { Type } from '@sinclair/typebox'

const schema = Type.Strict(Type.Object({
  JWT_SECRET: Type.String(),
  LOG_LEVEL: Type.String(),
  PRETTY_PRINT: Type.String(),
}))

export default envSchema({
  schema,
  dotenv: { path: join(import.meta.url, '.env') },
})
