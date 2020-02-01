sequelize-tinker
================

A REPL for sequelize inspired by Laravel Tinker.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sequelize-tinker.svg)](https://npmjs.org/package/sequelize-tinker)
[![CircleCI](https://circleci.com/gh/nitaking/tinker/tree/master.svg?style=shield)](https://circleci.com/gh/nitaking/tinker/tree/master)
[![Codecov](https://codecov.io/gh/nitaking/tinker/branch/master/graph/badge.svg)](https://codecov.io/gh/nitaking/tinker)
[![Downloads/week](https://img.shields.io/npm/dw/sequelize-tinker.svg)](https://npmjs.org/package/sequelize-tinker)
[![License](https://img.shields.io/npm/l/sequelize-tinker.svg)](https://github.com/nitaking/tinker/blob/master/package.json)

![2020-02-01 23 04 37](https://user-images.githubusercontent.com/10850034/73593419-63f1b180-4547-11ea-9f4a-1a54bcffd27a.gif)



<!-- toc -->
# Usage

```sh
cd path/to/your-sequelize-package
npx sequelize-tinker
```

<!-- usage -->
# Commands

```shell script
$ sequelize-tinker
>> Start sequelize-tinker! 
...
>> models
# [ 'Task', 'User' ]
```

```shell script
$ sequelize-tinker
>> Start sequelize-tinker! 
...
>> User.findOne({ raw: true })
Executing (default): SELECT `id`, `firstName`, `lastName`, `createdAt`, `updatedAt` FROM `Users` AS `User` LIMIT 1;
{ id: 1,
  firstName: 'John',
  lastName: 'Doe',
  createdAt: 2020-02-01T12:50:17.000Z,
  updatedAt: 2020-02-01T12:50:17.000Z }

```

# Advance
## Custom your directory:

Custom Models Dir: `--models-path` option.

```shell script
$ sequelize-tinker --models-path=models/index.js        
```

<!-- commands -->
# Todo

- [x] Custom Sequelize model's directory path setting.
- [x] Available await command.
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
