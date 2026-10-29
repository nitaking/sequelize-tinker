import fs from 'node:fs'
import {createRequire} from 'node:module'
import logger from './log.js'

// ユーザーのmodels(CommonJS)をカレントディレクトリ基準で読み込む
const require = createRequire(`${process.cwd()}/`)

const checkRequire = path => {
  try {
    if (fs.existsSync(path)) {
      return require(`${process.cwd()}/${path}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    logger.error(error)
  }
}

export {checkRequire as secureRequire}
