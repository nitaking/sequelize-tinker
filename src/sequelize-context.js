const {workDir} = require('./path')
const {secureRequire} = require('./secure-require')
const models = secureRequire(`${workDir}/models`) // todo: import setting
const sequelize = models && models.sequelize

function initializeContext(context) {
  if (models && sequelize) {
    context.models = models
    context.sequelize = sequelize

    // 各モデルの宣言
    const _models = models.sequelize.models
    Object.keys(_models).forEach(modelName => {
      context[modelName] = models[modelName]
    })
  }
}

module.exports = {
  initializeContext,
}
