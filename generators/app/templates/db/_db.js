'use strict';

const Sequelize = require('sequelize');

const dbName = 'example';	// TODO: CHANGE dbName
const url = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`;

const db = new Sequelize(url, {
	logging: false
});

module.exports = db;
