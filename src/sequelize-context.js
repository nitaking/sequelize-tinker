
const {secureRequire} = require('./secure-require')
const config = require('./config')
const models = secureRequire(config.getModelsPath()) // todo: import setting
const sequelize = models && models.sequelize

function initializeContext(context) {
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

module.exports = {
  initializeContext,
}
