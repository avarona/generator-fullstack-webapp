'use strict';

const Sequelize = require('sequelize');

require('dotenv-safe').config({
  allowEmptyValues: true,
  example: 'config/.env.config'
});

const name = process.env.DATABASE_NAME; // Database name is the app name

const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;

const db = new Sequelize(url, {
	logging: false,
	operatorsAliases: false
});

module.exports = db;
