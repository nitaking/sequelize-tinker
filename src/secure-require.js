import fs from 'node:fs'
import {createRequire} from 'node:module'
import path from 'node:path'
import logger from './log.js'

// ユーザーのmodels(CommonJS)をカレントディレクトリ基準で読み込む
const require = createRequire(`${process.cwd()}/`)

const checkRequire = modulePath => {
  const resolvedPath = path.resolve(process.cwd(), modulePath)
  try {
    if (fs.existsSync(resolvedPath)) {
      return require(resolvedPath)
    }
    logger.warn(`models not found: ${resolvedPath}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    logger.error(error)
  }
}

export {checkRequire as secureRequire}
