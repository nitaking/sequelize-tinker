const {Command, flags} = require('@oclif/command')
const Repl = require('./repl')
const {initializeContext} = require('./sequelize-context')

class SequelizeTinkerCommand extends Command {
  async run() {
    const {flags} = this.parse(SequelizeTinkerCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.js`)

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
}

module.exports = SequelizeTinkerCommand
