import { Type } from '@sinclair/typebox'
import { join } from 'path'
import envSchema from 'env-schema'

const schema = Type.Object({
  JWT_SECRET: Type.String(),
})

export default envSchema({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})
