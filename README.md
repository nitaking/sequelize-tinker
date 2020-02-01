sequelize-tinker
================

A REPL for sequelize inspired by Laravel Tinker.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sequelize-tinker.svg)](https://npmjs.org/package/sequelize-tinker)
[![CircleCI](https://circleci.com/gh/nitaking/tinker/tree/master.svg?style=shield)](https://circleci.com/gh/nitaking/tinker/tree/master)
[![Codecov](https://codecov.io/gh/nitaking/tinker/branch/master/graph/badge.svg)](https://codecov.io/gh/nitaking/tinker)
[![Downloads/week](https://img.shields.io/npm/dw/sequelize-tinker.svg)](https://npmjs.org/package/sequelize-tinker)
[![License](https://img.shields.io/npm/l/sequelize-tinker.svg)](https://github.com/nitaking/tinker/blob/master/package.json)

![2019-09-15 16 56 05](https://user-images.githubusercontent.com/10850034/64918547-e36e2680-d7da-11e9-82db-757c5f8d78f7.gif)


<!-- toc -->
# Usage

```sh
npm -g install sequelize-tinker
# yarn global add sequelize-tinker

cd path/to/sequelize-package
sequelize-tinker
```

<!-- usage -->
# Commands

<!-- commands -->
# Todo

- [x] Custom Sequelize model's directory path setting.
- [ ] Option
    - [ ] Default output JSON.stringify
- [ ] Command
    - [ ] ls (show local variables)
    - [ ] help (show help in repl time)
    

# Contribution

```bash
git clone git@github.com:nitaking/sequelize-tinker.git
cd example
./bin/run
```

##### another sequelize project
```
git clone git@github.com:nitaking/sequelize-tinker.git
npm link
cd another/prj
sequelize-tinker # Uninstall if you have installed.
```
