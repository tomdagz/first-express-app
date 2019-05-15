'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.login = function(email, password) {
    return User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (!user) return null;
      return user.authenticatePassword(password).then(valid => valid ? user : null);
    })
  };
  User.prototype.authenticatePassword = function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password_hash, function(err, valid) {
        if (err) return reject(err);
        return resolve(valid);
      });
    });
  };
  User.beforeCreate(function(user, options) {
    return new Promise((resolve, reject) => {
      if (user.password) {
        bcrypt.hash(user.password, 10, function(error, hash) {
          user.password_hash = hash;
          resolve();
        })
      }
    });
  });
  return User;
};