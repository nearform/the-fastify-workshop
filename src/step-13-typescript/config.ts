import { Type } from '@sinclair/typebox'
import envSchema from 'env-schema'
import { join } from 'path'

const schema = Type.Strict(Type.Object({
  PG_CONNECTION_STRING: Type.String(),
  JWT_SECRET: Type.String(),
  LOG_LEVEL: Type.String(),
  PRETTY_PRINT: Type.String(),
}))

export default envSchema<EnvConfig>({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})

export type EnvConfig = {
  PG_CONNECTION_STRING: string,
  JWT_SECRET: string
  PRETTY_PRINT: boolean
  LOG_LEVEL: string
}
