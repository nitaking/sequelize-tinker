const {workDir} = require('./path')

const configs = {
  MODELS_PATH: 'models-path',
}

module.exports = {
  // config key
  MODELS_PATH: configs.MODELS_PATH,
  //
  CONFIG_KEYS: Object.keys(configs),
  // values
  BASE_MODELS_PATH: `${workDir}/models`,
}
