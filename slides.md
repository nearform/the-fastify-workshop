---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# The Fastify Workshop

<img src="/assets/fastify.png" style="width: 30%;">

<div class="copyright">

<Copyright />

</div>

---

# Introduction: Why Fastify

<div class="dense">

- An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users

- How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?

</div>

---

# Introduction: Why Fastify /2

<div class="dense">

- Fastify is a Node.js web framework focused on performance and developer experience
- The Fastify team has spent considerable time building a highly supportive and encouraging community
- Fastify gained adoption by solving real needs of Node.js developers

</div>

---

# Core features

<div class="dense">

- **Highly performant**: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30k requests per second.
- **Extensible**: fully extensible via hooks, plugins and decorators.
- **Schema based**: It isn't mandatory, but we recommend to use JSON Schema to validate your routes and serialize your outputs. Fastify compiles the schema in a highly performant function.

</div>

---

# Core features /2

<div class="dense">

- **Logging**: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
- **Developer friendly**: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security
- **TypeScript ready**: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community

</div>

---

# Who is using Fastify

![Who is using Fastify](/assets/who.png)

https://www.fastify.io/organisations/

---

# Ecosystem

- There are 45 core plugins and 155 community plugins

- Can't find the plugin you are looking for? No problem, it's very easy to write one!

https://www.fastify.io/ecosystem/

---

# Benchmarks

  <div style="display: flex">
    <div style="flex: 1; margin-right: 1rem" class="dense">
      <ul>
        <li>
          Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible
        </li>
        <br />
        <li>
          All the code used for our benchmarks is <a href="https://github.com/fastify/benchmarks">available on GitHub</a>
        </li>
      </ul>
    </div>
    <div style="flex: .5">
      <a href="https://github.com/fastify/benchmarks">
        <img src="/assets/benchmarks.png" style="background-color: #E5F0FF">
      </a>
    </div>
  </div>

---

# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7
- docker
- docker-compose

#### Setup

```bash
git clone https://github.com/nearform/the-fastify-workshop
npm ci
npm run db:up
npm run db:migrate

# make sure you're all set
npm test --workspaces
```

</div>

---

# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the `src/step-{n}-{name}` folder
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Running the modules

- `cd src/step-{n}-{name}`

- Check out README.md

#### Example

```bash
cd src/step-01-hello-world

npm run start
```

---

# Step 1: Exercise 💻

<div class="dense">

Write a Fastify program in a `server.js` file which:

- Exposes a `GET /` route
- Listens on port 3000
- Responds with the JSON object

```json
{
  "hello": "world"
}
```

> 🏆 use ES modules!

</div>

---

# Step 1: Solution

```js
// server.js
import Fastify from 'fastify'

const start = async function () {
  const fastify = Fastify()

  fastify.get('/', () => {
    return { hello: 'world' }
  })

  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

# Step 1: Trying it out

### In the terminal:

```bash
curl http://localhost:3000

{"hello":"world"}
```

### In the browser:

<img style="width: 50%; text-align: center" src="/assets/hello-world.png">

---

# Step 2: Plugins

<div class="dense">

- As with JavaScript, where everything is an object, with Fastify everything is a plugin

- Fastify allows you to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API to use one or more plugins is `register`

https://www.fastify.io/docs/latest/Reference/Plugins/

</div>

---

# Step 2: Exercise 💻

<div class="dense">

- Split `server.js` into two files:

  - `server.js` contains only the server startup logic
  - `index.js` contains the code to instantiate Fastify and register plugins

- Create a `GET /users` route in `routes/users.js` and export it as a Fastify plugin

</div>

---

# Step 2: Solution

```js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer
```

---

# Step 2: Solution /2

```js
// server.js
import buildServer from './index.js'

const fastify = buildServer()

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

# Step 2: Solution /3

```js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', {}, async () => [
    { username: 'alice' },
    { username: 'bob' },
  ])
}
```

---

# Step 2: Trying it out

#### Note that the / route is now not found

```bash
curl http://localhost:3000/
```

```json
{
  "message": "Route GET:/ not found",
  "error": "Not Found",
  "statusCode": 404
}
```

#### We'll find our response at /users

```bash
curl http://localhost:3000/users
```

```json
[{ "username": "alice" }, { "username": "bob" }]
```

---

# Step 3: Logging

<div class="dense">

- Fastify ships by default with [`pino`](https://github.com/pinojs/pino)
- Pino is a logger that aims to lower as much as possible its impact on the application performance
- The 2 base principles it follows are:
  1. Log processing should be conducted in a separate process
  2. Use minimum resources for logging
- Fastify has a `logger` option you can use to enable logging and configure it

https://www.fastify.io/docs/latest/Reference/Logging/

</div>

---

# Step 3: Logging Readability / 2

<div class="dense">

- Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them
- By using transports we can also send logs for further processing, for example the `pino-pretty` transport will output the logs in a more human readable form. Note that this option should only be used during development.
- Options like this improve understandability for developers, making it easier to develop.

</div>

---

# Step 3: Exercise 💻

<div class="dense">

- Enable built-in request logging in the application
- Use the `pino-pretty` transport for pretty printing of logs
- Use the request logging that Pino provides when logging from the users route.
- Programmatically write logs in the application.

</div>

---

# Step 3: Solution /1

```js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
```

---

# Step 3: Solution /2

```js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
```

---

# Step 3: Trying it out

```bash
npm run start

[1612530447393] INFO (62680 on HostComputer):
  Fastify is starting up!
[1612530447411] INFO (62680 on HostComputer):
  Server listening at http://127.0.0.1:3000
```

---

# Step 3: Trying it out /2

```bash
curl http://localhost:3000/users

[{"username":"alice"},{"username":"bob"}]
```

```bash
[1612531288501] INFO (63322 on Softwares-MBP): incoming request
    req: {
      "method": "GET",
      "url": "/users",
      "hostname": "localhost:3000",
      "remoteAddress": "127.0.0.1",
      "remotePort": 54847
    }
    reqId: 1
[1612531288503] INFO (63322 on Softwares-MBP): Users route called
    reqId: 1
[1612531288515] INFO (63322 on Softwares-MBP): request completed
    res: {
      "statusCode": 200
    }
    responseTime: 13.076016008853912
    reqId: 1
```

---

# Step 4 Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

Created

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation

---

# Step 4: Exercise 💻

<div class="dense">

- Create and register a `POST /login` route in `routes/login.js`

- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password` with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)

</div>

---

# Step 4: Solution

```js
// routes/login.js
import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body
    return { username, password }
  })
}
```

---

# Step 4: Trying it out

#### With right credentials

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
```

```json
{
  "username": "alice",
  "password": "alice"
}
```

---

# Step 4: Trying it out /2

#### With wrong credentials

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{ "name": "alice", "passcode": "alice" }'
http://localhost:3000/login
```

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "body should have required property 'username'"
}
```

---

# Step 5 Constraints

- Route matching can also be constrained to match properties of the request. By default fastify supports `version` (via `Accept-Version` header) and `host` (via `Host` header)

> 🏆 Custom constraints can be added via [`find-my-way`](https://github.com/delvedor/find-my-way)

https://www.fastify.io/docs/latest/Reference/Routes/#constraints

---

# Step 5: Exercise 💻

<div class="dense">

- Add a new `GET /version` route that only accepts requests matching version `1.0.0`

> 💡 The `Accept-Version` header should accept 1.x, 1.0.x and 1.0.0

> 🏆 Add `Vary` header to the response to avoid cache poisoning

</div>

---

# Step 5: Solution

```js
// routes/version.js
export default async function version(fastify) {
  fastify.route({ 
    method: 'GET',
    url: '/version',
    constraints: { version: '1.0.0' },
    handler: async (req) => {
      return { version: '1.0.0' }
    },
  })
}
```

---

# Step 5: Trying it out

#### With right version

```bash
curl -X GET -H "Content-Type: application/json" \
-H "Accept-Version: 1.0.0" \
http://localhost:3000/version
```

```json
{
  "version": "1.0.0"
}
```

---

# Step 5: Trying it out /2

#### With wrong version

```bash
curl -X GET -H "Content-Type: application/json" \
-H "Accept-Version: 2.0.0" \
http://localhost:3000/version
```

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Route GET:/version not found"
}
```

> For the rest of the workshop the `GET /version` route will be removed

---

# Step 6: Testing

<div class="dense">

- Fastify is very flexible when it comes to testing and is compatible with most testing frameworks
- Built-in support for fake http injection thanks to [light-my-request](https://github.com/fastify/light-my-request)
- Fastify can also be tested after starting the server with `fastify.listen()` or after initializing routes and plugins with `fastify.ready()`

https://www.fastify.io/docs/latest/Guides/Testing/

</div>

---

# Step 6: Exercise 💻

<div class="dense">

- Write a unit test for the `index.js` module
- Use `node-tap`
- Use `fastify.inject`
- Check that GETting the `/users` route:
  - Responds with status code 200
  - Returns the expected array of users

> 💡 you don't need to start the server

</div>

---

# Step 6: Solution

```js
// test/index.test.js
import t from 'tap'

import buildServer from '../index.js'

const { test } = t

test('GET /users', async t => {
  t.test('returns users', async t => {
    const fastify = buildServer()

    const res = await fastify.inject('/users')

    t.equal(res.statusCode, 200)

    t.same(res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
```

---

# Step 6: Trying it out

#### Run the tests

```bash
❯ npm run test
$ tap
test/index.test.js 1> [1612531547285] INFO (63699 on Softwares-MBP): Fastify is starting up!
test/index.test.js 1> [1612531547371] INFO (63699 on Softwares-MBP): incoming request
test/index.test.js 1>     ...
 PASS  test/index.test.js 2 OK 123.827ms

🌈 SUMMARY RESULTS 🌈

Suites:   1 passed, 1 of 1 completed
Asserts:  2 passed, of 2
Time:     770.511ms
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
✨  Done in 2.70s.
```

---

# Step 7: Serialization

<div class="dense">

- Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function
- We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/

</div>

---

# Step 7: Exercise 💻

- Validate the response in the users route
- Ensure that the response is serialized properly and contains the required property `username` in each array item

---

# Step 7: Solution

```js
// routes/users.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object().prop('username', S.string().required())
    ),
  },
}

export default async function users(fastify) {
  fastify.get('/users', { schema }, async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
```

---

# Step 7: Trying it out

#### Make the response invalid

In routes/users.js change the hardcoded response so it doesn't match the schema:

```json
[{ "wrong": "alice" }, { "wrong": "bob" }]
```

You will need to restart the server in step-4-serialization for these changes to take effect.

```bash
curl http://localhost:3000/users
```

```json
{
  "statusCode": 500,
  "error": "Internal Server Error",
  "message": "\"username\" is required!"
}
```

---

# Step 8: Authentication

- [`@fastify/jwt`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

---

# Step 8: Exercise 💻

- Change `index.js` so that it:

  - Registers the `@fastify/jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options

---

# Step 8: Solution

```js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('@fastify/jwt'), {
    secret: 'supersecret',
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
```

---

# Step 8: Exercise /2 💻

- Change `routes/login.js` to add an auth check:

  - Perform a dummy check on the auth: if `username === password` then the user is authenticated

  - If the auth check fails, respond with a `401 Unauthorized` HTTP error

  > 💡 you can use the [`http-errors`](https://github.com/jshttp/http-errors) package

---

# Step 8: Exercise /2 💻

- Still on `routes/login.js`:

  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `@fastify/jwt` plugin

  - Change the response schema to ensure the `200` response is correctly formatted

---

# Step 8: Solution

```js
// routes/login.js
const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object().prop('token', S.string().required()),
  },
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) {
      throw errors.Unauthorized()
    }

    return { token: fastify.jwt.sign({ username }) }
  })
}
```

---

# Step 8: Trying it out

#### With right credentials

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
```

```json
{
  "token": "eyJhbGciOi ..."
}
```

---

# Step 8: Trying it out /2

#### With wrong credentials

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{ "username": "alice", "password": "wrong" }'
http://localhost:3000/login
```

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Unauthorized"
}
```

---

# Step 9: Config

<div class="dense">

- It is preferable to use environment variables to configure your app. Example: the JWT secret from the previous step
- This makes it easier to deploy the same code into different environments
- Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it's usually better to have only important info, while in a dev env it may be useful to show more

</div>

> 💡 As we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work

---

# Step 9: Exercise 💻

<div class="dense">

- Create a `config.js` file which:
  - Uses `env-schema` to load a `JWT_SECRET` environment variable, with fallback to a `.env` file
  - Validates its value with `fluent-json-schema`
- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function
- Change `index.js` so that it:
  - Accepts the configuration provided by `server.js` in the exported `buildServer` function

</div>

---

# Step 9: Solution

```js
// config.js
import { join } from 'desm'
import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())
  .prop('LOG_LEVEL', S.string().default('info'))
  .prop('PRETTY_PRINT', S.string().default(true))

export default envSchema({
  schema,
  dotenv: { path: join(import.meta.url, '.env') },
})
```

---

# Step 9: Solution /2

```js
// server.js
import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

# Step 9: Solution /3

```js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
    }
  }

  const fastify = Fastify(opts)

  ...

  return fastify
}

export default buildServer
```

---

# Step 10: Decorators

<div class="dense">

- In the previous step we generated a JWT token that can be used to access protected routes. In this step we're going to create a protected route and allow access only to authenticated users via a Fastify decorator

> 💡 This step and the next one work together and we'll get to try it all out after the next step

https://www.fastify.io/docs/latest/Reference/Decorators/

</div>

---

# Fastify extensibility

<img src="/assets/extensibility.png" style="height: 80%; width: 80%; object-fit: contain;" />

---

# Step 10: Exercise 💻

<div class="dense">

- Create a `plugins/authentication.js` plugin which:

  - Registers `@fastify/jwt` with a secret provided via plugin options

  > 💡 move the plugin registration from `index.js` to the new plugin module

  - Exposes an `authenticate` decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid

- Register the new plugin in `index.js`

</div>

---

# Step 10: Solution

```js
// plugins/authenticate.js
async function authenticate(fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate
```

#### 🏆 why is `skip-override` necessary? what is the alternative?

---

# Step 10: Solution/2

```js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...
  }

  const fastify = Fastify(opts)

  fastify.register(import('./plugins/authenticate.js'), opts)

  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
```

---

# Step 11: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Reference/Hooks/

---

# Fastify lifecycle hooks

<img src="/assets/hooks.png" style="height: 80%; width: 80%; object-fit: contain;" />

---

# Step 11: Exercise 💻

<div class="dense">

- Create a `GET /user` route in `routes/user/index.js`
- Require authentication using the `onRequest` Fastify hook
- Use the `fastify.authenticate` decorator
- Return the information about the currently authenticated user in the response

> 💡 you can get the current user from `request.user`

</div>

---

# Step 11: Solution

```js
// routes/user/index.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required()),
  },
}

export default async function user(fastify) {
  fastify.get(
    '/user',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
```

---

# Steps 10 & 11: Trying it out

> 💡 you need a valid JWT by logging in via the `POST /login` route

#### Hit the user route with a token in the headers

```bash
curl http://localhost:3000/user \
-H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."
```

#### With valid token

```json
{ "username": "alice" }
```

#### With a wrong token (the error message will vary)

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Authorization token ..."
}
```

---

# Step 12: Fastify autoload

<div class="dense">

- [`@fastify/autoload`](https://github.com/fastify/fastify-autoload) is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure
- Note that as we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work
- In this step we have also introduced integration tests. You can see these running if you run `npm run test`

</div>

---

# Step 12: Exercise 💻

<div class="dense">

- Remove all the manual route registrations.
- Register the autoload plugin two times:
  - one for the `plugins` folder
  - one for the `routes` folder
- Remove the `user` path in `user/index.js` as autoload will derive this from the folder structure

> 🏆 does the route need to be registered explicitly?

<br/>

> 🏆 what is the url the route will respond to?

</div>

---

# Step 12: Solution

```js
// index.js
import { join } from 'desm'
import Fastify from 'fastify'
import autoload from '@fastify/autoload'

function buildServer(config) {
  ...

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options: opts,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: opts,
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}
```

---

# Step 12: Solution /2

```js
// routes/user/index.js
...

export default async function user(fastify) {
  fastify.get(
    '/',

    ...
  )
}
```

---

# Step 13: Database 🏆

<div class="dense">

- Use [`@fastify/postgres`](https://github.com/fastify/fastify-postgres), which allows to share the same PostgreSQL connection pool in every part of your server
- Use [`@nearform/sql`](https://github.com/nearform/sql) to create database queries using template strings without introducing SQL injection vulnerabilities

Make sure you setup the db first with:

```sh
npm run db:up
npm run db:migrate
```

<br/>

> 💡 check the `migrations` folder to see the database schema.

</div>

---

# Step 13: Exercise 💻

<div class="dense">

- Change `config.js` to support a `PG_CONNECTION_STRING` variable
- Enrich `.env` with:
  ```txt
  PG_CONNECTION_STRING=postgres://postgres:postgres@0.0.0.0:5433/postgres
  ```
- Register `@fastify/postgres` in `index.js`, providing the variable's value as the `connectionString` plugin option

</div>

---

# Step 13: Solution

```js
// index.js
function buildServer(config) {
  //...
  fastify.register(import('@fastify/postgres'), {
    connectionString: opts.PG_CONNECTION_STRING,
  })
  // ...

  return fastify
}

export default buildServer
```

---

# Step 13: Exercise 💻

Change `routes/login.js`:

<div class="dense">

- After carrying out the existing dummy auth check, look up the user in the `users` database table via the `username` property provided in the request body

> 💡 write the query using `@nearform/sql`

<br/>

- If the user does not exist in the database, return a `401 Unauthorized` error

</div>

---

# Step 13: Solution

```js
// routes/login.js
import SQL from '@nearform/sql'

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) throw errors.Unauthorized()

    const {
      rows: [user],
    } = await fastify.pg.query(
      SQL`SELECT id, username FROM users WHERE username = ${username}`
    )

    if (!user) throw errors.Unauthorized()

    return { token: fastify.jwt.sign({ username }) }
  })
}
```

---

# Step 13: Exercise 💻

<div class="dense">

- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`
- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`
- Load all users from the database instead of returning an hardcoded array of users

</div>

---

# Step 13: Solution

```js
// routes/users/index.js
const schema = {
  response: {
    200: S.array().items(
      S.object()
        .prop('id', S.integer().required())
        .prop('username', S.string().required())
    ),
  },
}
export default async function users(fastify) {
  fastify.get(
    '/',
    { onRequest: [fastify.authenticate], schema },
    async () => {
      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )
      return users
    }
  )
}
```

---

# Step 14: Exercise 💻

<div class="dense">

- Let's create an Fastify application using **TypeScript**.
- We will transpose the application that you did in the [Step 10](./59) to TypeScript
- Use `declaration merging` to add the custom `authenticate` decorator property to `FastifyInstance`
- Use [`@sinclair/typebox`](https://www.npmjs.com/package/@sinclair/typebox) to transform JSON Schema into types

</div>

---

# Step 14: Solution/1

```ts
// routes/login.ts
import { Type, Static } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'
import errors from 'http-errors'

const BodySchema = Type.Strict(
  Type.Object({
    username: Type.String(),
    password: Type.String(),
  })
)
// Generate type from JSON Schema
type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Strict(
  Type.Object({
    token: Type.String(),
  })
)
type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  body: BodySchema,
  response: { 200: ResponseSchema },
}
```

---

# Step 14: Solution/2

```ts
// routes/login.ts
export default async function login(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema },
    async (
      req: FastifyRequest<{ Body: BodySchema }>
    ): Promise<ResponseSchema> => {
      const { username, password } = req.body

      if (username !== password) {
        throw new errors.Unauthorized()
      }

      return { token: fastify.jwt.sign({ username }) }
    }
  )
}
```

---

# Step 14: Solution/3

```ts
// plugins/authenticate.ts
async function authenticate(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> {
  fastify.register(fastifyJwt, { secret: opts.JWT_SECRET })
  fastify.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    }
  )
}

export default fp(authenticate)
```

---

# Step 14: Solution/4

```ts
// @types/index.d.ts
import type { FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}
```

It adds the `authenticate` property to `FastifyInstance`:

<img src="/assets/declaration-merging.png">

---

# 🏆 Write Tests 🏆

> 💡 inspire from the code in the completed steps

---

# Thanks For Having Us!

## 👏👏👏
