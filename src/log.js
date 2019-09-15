/* eslint-disable no-console,no-unused-expressions */

let logger = function () {
}

logger.LEVEL = {
  RUN: 0,
  ERROR: 1,
  WARN: 2,
  LOG: 3,
  INFO: 4,
  DEBUG: 5,
  FULL: 5,
}
logger.level = logger.LEVEL.FULL

logger.debug = function (msg) {
  (this.level >= this.LEVEL.DEBUG) && console.debug(msg)
}
logger.info  = function (msg) {
  (this.level >= this.LEVEL.INFO) && console.info(msg)
}
logger.log   = function (msg) {
  (this.level >= this.LEVEL.LOG) && console.log(msg)
}
logger.warn  = function (msg) {
  (this.level >= this.LEVEL.WARN) && console.warn(msg)
}
logger.error = function (msg) {
  (this.level >= this.LEVEL.ERROR) && console.error(msg)
}

module.exports = logger
