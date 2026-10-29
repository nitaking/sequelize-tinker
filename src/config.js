import Conf from 'conf'
import * as constants from './constants.js'

const config = new Conf({projectName: 'sequelize-tinker'})

const getAll = () => {
  let result = {}
  constants.CONFIG_KEYS.forEach(key => {
    result[key] = config.get(key)
  })
  return result
}

export default {
  getModelsPath: ()/* :string */ =>
    config.get(constants.MODELS_PATH, constants.BASE_MODELS_PATH),
  setModelsPath: modelsPath/* :void */ => {
    config.set(constants.MODELS_PATH, modelsPath)
  },
  getLs: ()/* :string */ =>
    config.get(constants.LS_OUTPUT, constants.BASE_MODELS_PATH),
  config,
  getAll,
}
