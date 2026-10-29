import {workDir} from './path.js'

const configs = {
  MODELS_PATH: 'models-path',
}

// config key
export const MODELS_PATH = configs.MODELS_PATH
//
export const CONFIG_KEYS = Object.keys(configs)
// values
export const BASE_MODELS_PATH = `${workDir}/models`
