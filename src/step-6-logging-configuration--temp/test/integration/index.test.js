import fs from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import t from 'tap'

import buildServer from '../../index.js'
import config from '../../config.js'

const logfile = join(fileURLToPath(import.meta.url), '../../../test.log')

const { test } = t

test('server', async t => {
  let fastify

  t.beforeEach(async () => {
    if (fs.existsSync(logfile)) {
      fs.unlinkSync(logfile)
    }

    fastify = buildServer(config)
  })

  t.tearDown(() => {
    if (fs.existsSync(logfile)) {
      fs.unlinkSync(logfile)
    }
    fastify.close()
  })

  t.test('authenticates users and lists users', async t => {
    const loginRes = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'alice',
      },
    })

    const { token } = await loginRes.json()

    t.strictEqual(loginRes.statusCode, 200)
    t.type(token, 'string')

    const usersRes = await fastify.inject({
      url: '/users',
      headers: {
        authorization: `bearer ${token}`,
      },
    })

    t.strictEqual(usersRes.statusCode, 200)

    const users = await usersRes.json()

    t.ok(Array.isArray(users))

    t.equivalent(users, [
      { id: 1, username: 'alice' },
      { id: 2, username: 'bob' },
    ])

    t.ok(fs.existsSync(logfile))
    const content = fs.readFileSync(logfile, { encoding: 'utf8' })
    const logEntriesJson = content.split('\n')

    const logEntries = logEntriesJson.map(entry => {
      if (entry) {
        return JSON.parse(entry)
      }
    })

    // Redact config applied
    const entry1 = logEntries.find(entry => {
      return entry && entry.req && entry.req.remoteAddress
    })
    t.strictEqual(entry1.req.remoteAddress, '[Redacted]')

    // Pragmatic log entry registered
    const entry2 = logEntries.find(entry => {
      return entry && entry.level === 30 && entry.msg === 'About to load the users'
    })
    t.ok(!!entry2)

    const entry3 = logEntries.find(entry => {
      return entry && entry.level === 50
    })
    t.strictEqual(entry3.msg, 'What an error!!')
    t.ok(!!entry3.stack)

    fs.unlinkSync(logfile)
    fastify.close()
  })
})
