import { join } from 'path'
import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())
  .prop('LOG_LEVEL', S.string().default('info'))
  .prop('PRETTY_PRINT', S.string().default(true))

export default envSchema<EnvConfig>({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})

export type EnvConfig = {
  JWT_SECRET: string
  PRETTY_PRINT: boolean
  LOG_LEVEL: string
}
