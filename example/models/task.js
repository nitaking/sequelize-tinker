'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};