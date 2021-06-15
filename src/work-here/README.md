# Welcome to the Fastify Workshop

We will create a small HTTP application that read something
from a database.

## Step 1

* Create a Fastify server that has a `GET /` route
  that returns `{ "hello": "world" }` inside `server.js`

Hint: https://www.fastify.io/ has all you need.

## Step 2

**** Take a quick skim at https://www.fastify.io/docs/latest/Plugins/.
* Create route `GET /users` inside a plugin `routes/users.js`,
  this plugin must return `[ { "username": "alice" }, { "username": "bob" } ]`
* Register the `routes/users.js` plugin
* Create a new function `buildServer` that create the fastify instance with the registered plugin.
* Extract `buildServer` into its own file, `index.js`

## Step 3

* Enable logging
* Enable pretty printing (only for dev)

## Step 4

* Read https://www.fastify.io/docs/latest/Validation-and-Serialization/.
* Take a look at https://github.com/fastify/fluent-json-schema
* Add serialization to the `GET /users` route

## Step 5

* Read https://www.fastify.io/docs/latest/Testing/.
* Add a unit test for the `GET /users` route

## Step 6

* Create a `routes/login.js` plugin with a `POST /login` route that accepts a `{ "username": "...", password: "..." }` JSON body.
  The route must return `{ username, password }`
* Register the plugin inside `index.js`
* Add validation schema using fluent-json-schema
* Add a unit test

## Step 7

* Register https://github.com/fastify/fastify-jwt inside `index.js`
* Modify `routes/login.js` so that it returns a signed JWT token with the provided username.
* Modify `routes/login.js` so that the route throws an UNAUTHORIZED error if the username is different from the password (this is unsafe!)
  Check out the http://npm.im/http-errors module.

## Step 8

* Create a `config.js` file that uses the https://www.npmjs.com/package/env-schema module* Create a `config.js` file that uses the https://www.npmjs.com/package/env-schema module to parse a few environment variables:
  - `JWT_SECRET`
  - `LOG_LEVEL`, default `'info'`
  - `PRETTY_PRINT`, default `true`
* Use `config.js` within `server.js` to parse the configuration for the server.
