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

<p align="center">
<a href="https://www.buymeacoffee.com/axIqgPk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
</p>

<!-- toc -->
# Introduction

```sh
$ npm -g install sequelize-tinker
```

```sh
$ cd path/to/your-sequelize-package
$ sequelize-tinker
```

<!-- usage -->
# Usage

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

```shell script
$ sequelize-tinker
>> Start sequelize-tinker! 
...
>> const u = await User.findOne({ raw: true, where: { id: 49197 }  })
undefined
>> u.email
'email_49197@example.com'
>> 
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
- [ ] Multi Line

# Roadmap
1. ts-node(for TypeScript sequelize)
1. Another ORM 
   - TypeORM
 
# Contribution

```bash
git clone git@github.com:nitaking/sequelize-tinker.git
cd example
./bin/run
```

##### another sequelize project
```
# fork from git@github.com:nitaking/sequelize-tinker.git
npm link
cd another/prj
sequelize-tinker # Uninstall if you have installed.
```
