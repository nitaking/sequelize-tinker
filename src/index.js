const {Command, flags} = require('@oclif/command')
const jq = require('node-jq')

const Repl = require('./repl')
const {initializeContext} = require('./sequelize-context')
const {setModelsPath, getAll} = require('./config')

const _initialFlags = {}

class SequelizeTinkerCommand extends Command {
  async run() {
    const {flags, args} = this.parse(SequelizeTinkerCommand)

    if (flags === _initialFlags) {
      return
    }

    // show config
    if (args.firstArg === 'config') {
      jq.run('.', getAll(), {input: 'json'})
      .then(output => {
        this.log(output)
      })
      .catch(error => {
        this.error(error)
      })
      return
    }

    if (flags['models-path']) {
      setModelsPath(flags['models-path'])
    }

    // repl entry
    const replUtil = new Repl({initializeContext})
    replUtil.start()
  }
}

SequelizeTinkerCommand.description = `sequelizeコマンドの実行をサポートするreplを提供します.
sequelizeがinstallされているパッケージにて各コマンドを実行してください.
`

SequelizeTinkerCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  // name: flags.string({ char: 'n', description: 'name to print' })
  'models-path': flags.string({char: 'p', description: 'Set Sequelize models\'s dir path.'}),
}

SequelizeTinkerCommand.args = [
  {name: 'firstArg'},
  {name: 'secondArg'},
]
SequelizeTinkerCommand.examples = [
  '$ sequelize-tinker',
  '$ sequelize-tinker --models-path ./src/models',
  '$ sequelize-tinker config',
]

module.exports = SequelizeTinkerCommand
