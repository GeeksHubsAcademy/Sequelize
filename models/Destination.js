'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    travel: DataTypes.STRING,
  }, {});
  Destination.associate = function(models) {
    // associations can be defined here
  };
  return Destination;
};