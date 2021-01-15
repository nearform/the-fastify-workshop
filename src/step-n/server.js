import buildServer from './index.js'
import config from './config.js'

const app = buildServer(config)

const start = async function () {
  try {
    await app.listen(process.env.PORT || 3000)
  } catch (e) {
    console.error(e)
  }
}

start()
