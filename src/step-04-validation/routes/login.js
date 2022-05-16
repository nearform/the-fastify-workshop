import { Type } from '@sinclair/typebox'
import S from 'fluent-json-schema'
import Ajv from "ajv"

const schemaBox = Type.Object({
  body: Type.Object({
    username: Type.String(),
    password: Type.String(),
  })
})

const schemaFluent = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
}

/**
 * @type {import('fastify').FastifyPluginAsync}
 * */
export default async function login(fastify) {
  fastify.post(
    '/login',
    // { schema: schemaFluent },
    { schema: schemaBox },
    /**
     * @type {import('fastify').RouteHandler<{ Body: { username: string; password: string } }>}
     * */
    async req => {
      const ajv = new Ajv();
      const validate = ajv.compile(Type.Strict(schemaBox));
      if (!Object.keys(req.body) || !validate(req)) {
        throw new Error(JSON.stringify(validate.errors));
      }

      const { username, password } = req.body
      return { username, password }
    }
  )
}
