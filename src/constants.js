const {workDir} = require('./path')

// config key
const MODELS_PATH = 'models-path'
const CONFIG_KEYS = [MODELS_PATH]

// values
const BASE_MODELS_PATH = `${workDir}/models`

module.exports = {
  CONFIG_KEYS,
  MODELS_PATH,
  BASE_MODELS_PATH,
}
