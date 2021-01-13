'use strict'

const server = require('./server')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
})

server.listen(3000)
