import { Type } from '@sinclair/typebox'
import envSchema from 'env-schema'
import { join } from 'path'

const schema = Type.Strict(Type.Object({
  JWT_SECRET: Type.String(),
  LOG_LEVEL: Type.String(),
  PRETTY_PRINT: Type.String(),
}))

export default envSchema<EnvConfig>({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})

export type EnvConfig = {
  JWT_SECRET: string
  PRETTY_PRINT: boolean
  LOG_LEVEL: string
}
