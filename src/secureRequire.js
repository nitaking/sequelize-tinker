const fs = require('fs')

const checkRequire = (path) => {
  try {
    if (fs.existsSync(path)) {
      return require(path);
    }
  } catch(err) {
    console.error(err)
  }
};

module.exports = {
  secureRequire: checkRequire,
};
