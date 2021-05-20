class: center, title-page

# The Fastify Workshop

<img src="assets/fastify.png" style="width: 30%">

---

class: branded

# Introduction: Why Fastify

- An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users

- How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

---

class: branded

# Introduction: Why Fastify /2

- Fastify is a Node.js web framework focused on performance and developer experience

- The Fastify team has spent considerable time building a highly supportive and encouraging community

- Fastify gained adoption by solving real needs of Node.js developers

---

class: branded

# Core features

- **Highly performant**: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30 thousand requests per second

- **Extensible**: Fastify is fully extensible via its hooks, plugins and decorators

- **Schema based**: even if it is not mandatory we recommend to use JSON Schema to validate your routes and serialize your outputs, internally Fastify compiles the schema in a highly performant function

---

class: branded

# Core features /2

- **Logging**: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!

- **Developer friendly**: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security

- **TypeScript ready**: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community

---

class: branded

# Who is using Fastify

![Who is using Fastify](assets/who.png)

https://www.fastify.io/organisations/

---

class: branded

# Ecosystem

- There are 42 core plugins and 124 community plugins

- Can't find the plugin you are looking for? No problem, it's very easy to write one!

https://www.fastify.io/ecosystem/

---

# Benchmarks

<div style="display: flex">
  <div style="flex: 1; margin-right: 1rem">
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
  <div style="flex: .8">
    <a href="https://github.com/fastify/benchmarks">
      <img src="assets/benchmarks.png">
    </a>
  </div>
</div>

---

class: branded

# Getting setup

#### Requirements

- Node LTS
- yarn
- docker
- docker-compose

#### Setup

```bash
git clone https://github.com/nearform/the-fastify-workshop
yarn
yarn db:up
yarn db:migrate

# make sure you're all set
yarn test
```

---

class: branded

# Workshop structure

- This workshop is made of multiple, incremental modules

- Each module builds on top of the previous one

- At each step you are asked to add features and solve problems

- You will find the solution to each step in the `src/step-{n}-{name}` folder

- The 🏆 icon indicates bonus features

- The 💡 icon indicates hints

---

class: branded

# Running the modules

- `cd src/step-{n}-{name}`

- Check out README.md

#### Example

```bash
cd src/step-1-hello-world

yarn start
```

---

class: branded

# Step 1: Exercise 💻

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

---

class: branded

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
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

class: branded

# Step 1: Trying it out

### In the terminal:

```a
curl http://localhost:3000

{"hello":"world"}
```

### In the browser:

<img style="width: 50%; text-align: center" src="assets/hello-world.png">

---

class: branded

# Step 2: Plugins

- As with JavaScript, where everything is an object, with Fastify everything is a plugin

- Fastify allows the user to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API that you will need to use one or more plugins, is `register`

https://www.fastify.io/docs/latest/Plugins/

---

class: branded

# Step 2: Exercise 💻

- Split `server.js` into two files:

  - `server.js` contains only the server startup logic
  - `index.js` contains the code to instantiate Fastify and register plugins

- Create a `GET /users` route in `routes/users.js` and export it as a Fastify plugin

---

class: branded

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

class: branded

# Step 2: Solution /2

```js
// server.js
import buildServer from './index.js'

const fastify = buildServer()

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

class: branded

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

```a
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

```a
curl http://localhost:3000/users
```

```json
[{ "username": "alice" }, { "username": "bob" }]
```

---

class: branded

# Step 3: Logging

- Fastify ships by default with [`pino`](https://github.com/pinojs/pino)
- Pino is a logger that aims to lower as much as possible its impact on the application performance

- The 2 base principles it follows are:

  1. Log processing should be conducted in a separate process
  2. Use minimum resources for logging

- Fastify has a `logger` option you can use to enable logging and configure it

https://www.fastify.io/docs/latest/Logging/

---

class: branded

# Step 3: Logging Readability / 2

- Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them

- We also have an option called `prettyPrint` which will output the logs in a more human readable form. Note that this option should only be used during development.

- Options like this improve understandability for developers, making it easier to develop.

---

class: branded

# Step 3: Exercise 💻

- Enable built-in request logging in the application

- Enable `prettyPrint` too.

- Use the request logging that Pino provides when logging from the users route.

- Programmatically write logs in the application.

---

class: branded

# Step 3: Solution /1

```js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      prettyPrint: true,
    },
  })

  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
```

---

class: branded

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

class: branded

# Step 3: Trying it out

```a
yarn start

[1612530447393] INFO (62680 on HostComputer):
  Fastify is starting up!
[1612530447411] INFO (62680 on HostComputer):
  Server listening at http://127.0.0.1:3000
```

---

class: branded

# Step 3: Trying it out /2

```a
curl http://localhost:3000/users

[{"username":"alice"},{"username":"bob"}]
```

```a
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

class: branded

# Step 4: Serialization

- Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function

- We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information

https://www.fastify.io/docs/latest/Validation-and-Serialization/#serialization

---

class: branded

# Step 4: Exercise 💻

- Validate the response in the users route using a schema:

  - Created with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)

  - Ensure that the response is serialized properly and contains the required property `username` in each array item

---

class: branded

# Step 4: Solution

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

# Step 4: Trying it out

#### Make the response invalid

In routes/users.js change the hardcoded response so it doesn't match the schema:

```json
[{ "wrong": "alice" }, { "wrong": "bob" }]
```

You will need to restart the server in step-4-serialization for these changes to take effect.

```a
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

class: branded

# Step 5: Testing

- Fastify is very flexible when it comes to testing and is compatible with most testing frameworks

- Built-in support for fake http injection thanks to [light-my-request](https://github.com/fastify/light-my-request)

- Fastify can also be tested after starting the server with `fastify.listen()` or after initializing routes and plugins with `fastify.ready()`

https://www.fastify.io/docs/latest/Testing/

---

class: branded

# Step 5: Exercise 💻

- Write a unit test for the `index.js` module

- Use `node-tap`

- Use `fastify.inject`

- Check that GETting the `/users` route:
  - Responds with status code 200
  - Returns the expected array of users

💡 you don't need to start the server

---

# Step 5: Solution

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

    t.same(await res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
```

---

# Step 5: Trying it out

#### Run the tests

```a
❯ yarn test
yarn run v1.16.0
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

class: branded

# Step 6: Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

https://www.fastify.io/docs/latest/Validation-and-Serialization/#validation

---

class: branded

# Step 6: Exercise 💻

- Create and register a `POST /login` route in `routes/login.js`

- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password`

---

# Step 6: Solution

```js
// routes/login.js
import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object()
      .prop('username', S.string().required())
      .prop('password', S.string().required()),
  },
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body
    return { username, password }
  })
}
```

---

# Step 6: Trying it out

#### With right credentials

```a
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

# Step 6: Trying it out /2

#### With wrong credentials

```a
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

class: branded

# Step 7: Authentication

- [`fastify-jwt`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

---

class: branded

# Step 7: Exercise 💻

- Change `index.js` so that it:

  - Registers the `fastify-jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options

---

class: branded

# Step 7: Solution

```js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: true,
    prettyPrint: true,
  })

  fastify.register(import('fastify-jwt'), {
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

class: branded

# Step 7: Exercise /2 💻

- Change `routes/login.js` to add an auth check:

  - Perform a dummy check on the auth: if `username === password` then the user is authenticated

  - If the auth check fails, respond with a `401 Unauthorized` HTTP error

  > 💡 you can use the [`http-errors`](https://github.com/jshttp/http-errors) package

  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `fastify-jwt` plugin

  - Change the response schema to ensure the `200` response is correctly formatted

---

# Step 7: Solution

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

# Step 7: Trying it out

#### With right credentials

```a
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

# Step 7: Trying it out /2

#### With wrong credentials

```a
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

class: branded

# Step 8: Config

- It is preferable to use environment variables to configure your app. For example, the JWT secret we hard-coded in the previous step

- This makes it easier to deploy the same code into different environments

- Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it's usually better to have only important information, while in a dev environment it may be useful to show more

> 💡 As we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work

---

class: branded

# Step 8: Exercise 💻

- Create a `config.js` file which:

  - Uses `env-schema` to load a `JWT_SECRET` environmnent variable, with fallback to a `.env` file

  - Validates its value with `fluent-json-schema`

- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function

- Change `index.js` so that it:

  - Accepts the configuration provided by `server.js` in the exported `buildServer` function

---

class: branded

# Step 8: Solution

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

class: branded

# Step 8: Solution /2

```js
// server.js
import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

---

class: branded

# Step 8: Solution /3

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

class: branded

# Step 9: Decorators

- In the previous step we generated a JWT token that can be used to access protected routes. In this step we're going to create a protected route and allow access only to authenticated users via a Fastify decorator

> 💡 This step and the next one work together and we'll get to try it all out after the next step

https://www.fastify.io/docs/latest/Decorators/

---

class: branded

# Fastify extensibility

<img src="assets/extensibility.png" style="width: 80%; margin-left: auto; margin-right: auto; display: block;" />

---

class: branded

# Step 9: Exercise 💻

- Create a `plugins/authentication.js` plugin which:

  - Registers `fastify-jwt` with a secret provided via plugin options

  > 💡 move the plugin registration from `index.js` to the new plugin module

  - Exposes an `authenticate` decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid

- Register the new plugin in `index.js`

---

# Step 9: Solution

```js
// plugins/authenticate.js
async function authenticate(fastify, opts) {
  fastify.register(import('fastify-jwt'), {
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

class: branded

# Step 9: Solution/2

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

class: branded

# Step 10: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Hooks/

---

# Fastify lifecycle hooks

<img src="assets/hooks.png" style="width: 80%; margin-left: auto; margin-right: auto; display: block;" />

---

class: branded

# Step 10: Exercise 💻

- Create a `GET /` route in `routes/user/index.js`

- Require authentication using the `onRequest` Fastify hook

- Use the `fastify.authenticate` decorator

- Return the information about the currently authenticated user in the response

> 💡 you can get the current user from `request.user`

---

class: branded

# Step 10: Solution

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

# Steps 9 & 10: Trying it out

💡 you need a valid JWT by logging in via the `POST /login` route

#### Hit the user route with a token in the headers

```a
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

class: branded

# Step 11: Fastify autoload

- [`fastify-autoload`](https://github.com/fastify/fastify-autoload) is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure

- Note that as we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work

- In this step we have also introduced integration tests. You can see these running if you run `yarn test`

---

class: branded

# Step 11: Exercise 💻

- Remove all the manual route registrations.

- Register the autoload plugin two times:

  - one for the `plugins` folder
  - one for the `routes` folder

- Remove the `user` path in `user/index.js` as autoload will derive this from the folder structure

> 🏆 does the route need to be registered explicitly?

> 🏆 what is the url the route will respond to?

---

# Step 11: Solution

```js
// index.js
import { join } from 'desm'
import Fastify from 'fastify'
import autoload from 'fastify-autoload'

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

class: branded

# Step 11: Solution /2

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

class: branded

# 🏆 Step 12: Database

- Use [`fastify-postgres`](https://github.com/fastify/fastify-postgres), which allows to share the same PostgreSQL connection pool in every part of your server

- Use [`@nearform/sql`](https://github.com/nearform/sql) to create database queries using template strings without introducing SQL injection vulnerabilities

Make sure you setup the db first with:

```sh
yarn db:up
yarn db:migrate
```

> 💡 check the `migrations` folder to see the database schema.

---

class: branded

# Step 12: Exercise 💻

- Change `config.js` to support a `PG_CONNECTION_STRING` variable

- Enrich `.env` with:

  ```txt
  PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres
  ```

- Register `fastify-postgres` in `index.js`, providing the variable's value as the `connectionString` plugin option

---

class: branded

# Step 12: Solution

```js
// index.js
function buildServer(config) {
  //...
  fastify.register(import('fastify-postgres'), {
    connectionString: opts.PG_CONNECTION_STRING,
  })
  // ...

  return fastify
}

export default buildServer
```

---

class: branded

# Step 12: Exercise 💻

Change `routes/login.js`:

- After carrying out the existing dummy auth check, look up the user in the `users` database table via the `username` property provided in the request body

> 💡 write the query using `@nearform/sql`

- If the user does not exist in the database, return a `401 Unauthorized` error

---

class: branded

# Step 12: Solution

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

class: branded

# Step 12: Exercise 💻

- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`

- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`

- Load all users from the database instead of returning an hardcoded array of users

---

# Step 12: Solution

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

class: center, no-border, branded

# 🏆 Write Tests 🏆

> 💡 inspire from the code in the completed steps

---

class: center, no-border, branded

# Thanks For Having Us!

## 👏👏👏
