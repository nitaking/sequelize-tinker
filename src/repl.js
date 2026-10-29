import os from 'node:os'
import path from 'node:path'
import repl from 'node:repl'
import logger from './log.js'

const historyFile = path.join(os.homedir(), '.sequelize_tinker_history')

class Repl {
  constructor(props) {
    if (props.initializeContext) {
      this._initializeContext = props.initializeContext
    }
  }

  initialize() {
    // contextを設定. callbackで渡す
    if (this.server && this._initializeContext) {
      this._initializeContext(this.server.context)
    }
  }

  start() {
    this.server = repl.start({
      prompt: '>> ',
    })
    // awaitはNode標準のREPLで利用可能。履歴のみ設定する。
    this.server.setupHistory(historyFile, () => {})
    this.initialize()

    logger.log('Start sequelize-tinker! \nType ^C to exit.\n')
    logger.log('ex: User.findOne()')

    this.server.on('exit', this.exit)
    this.server.on('line', this.line)
  }

  exit() {
    logger.log('Bye!')
  }

  line() {

  }
}

export default Repl
