const repl = require('repl');

class ReplUtil {
  constructor(props) {
    if (props.initializeContext) {
      this._initializeContext = props.initializeContext;
    }
  }

  initialize() {
    // contextを設定. callbackで渡す
    if (this.server && this._initializeContext) {
      this._initializeContext(this.server.context)
    }
  }

  start () {
    this.server = repl.start({
      prompt: '>> ',
    });
    this.initialize();

    console.log(`CLI (REPL)\nType ^C to exit.\n`);
    console.log(`ex) models.User.findOne()\n`);

    this.server.on('exit', this.exit);
    this.server.on('line', this.line);

  }

  exit() {
    console.log('Bye!');
  }

  line() {

  }
}

module.exports = ReplUtil;
