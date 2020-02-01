const Conf = require('conf')
const constants = require('./constants')

const config = new Conf()

const getModelsPath = ()/* :void */ => config.get(constants.MODELS_PATH, constants.BASE_MODELS_PATH)
const setModelsPath = modelsPath/* :string */ => {
  config.set(constants.MODELS_PATH, modelsPath)
}

const getAll = () => {
  let result = {}
  constants.CONFIG_KEYS.forEach(key => {
    result[key] = config.get(key)
  })
  return result
}

module.exports = {
  getModelsPath,
  setModelsPath,
  config,
  getAll,
}
