const fs = require('fs')
const logger = require('./log')

const checkRequire = path => {
  try {
    if (fs.existsSync(path)) {
      return require(path)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    logger.error(error)
  }
}

module.exports = {
  secureRequire: checkRequire,
}
