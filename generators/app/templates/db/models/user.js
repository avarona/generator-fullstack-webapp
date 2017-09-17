'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING
  }
}, {
  getterMethods: {
    fullName: function() {
      const first = this.firstName[0].toUpperCase() + this.firstName.slice(1, this.firstName.length);
      const last = this.lastName[0].toUpperCase() + this.lastName.slice(1, this.lastName.length);
      return first + ' ' + last;
    }
  }
});

// Methods Sequelize v4
User.prototype.example = function () {
  return 'Example instance method';
}

module.exports = User;
