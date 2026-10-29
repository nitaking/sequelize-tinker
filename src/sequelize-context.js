
import {secureRequire} from './secure-require.js'
import config from './config.js'

function initializeContext(context) {
  // --models-pathの設定後に読み込む
  const models = secureRequire(config.getModelsPath())
  const sequelize = models && models.sequelize

  // Contextにセットすることでrepl内で利用可能な変数になる
  if (models && sequelize) {
    context.models = []
    // 各モデルの宣言
    const _models = models.sequelize.models
    Object.keys(_models).forEach(modelName => {
      context[modelName] = models[modelName]

      context.models.push(modelName)
    })

    context.sequelize = sequelize
    context.ls = config.getLs()
  }
}

export {initializeContext}
