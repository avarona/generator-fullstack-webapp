'use strict';

const db = require('./_db');
const users = require('./models/user.js');

const seedUsers = () => db.Promise.map([
  {id: '1', firstName: 'Homer', lastName: 'Simpson', email: 'homer@email.com', password: 'laN20#04$'},
  {id: '2', firstName: 'Marge', lastName: 'Simpson', email: 'marge@email.com', password: 'lMSKns93#2'},
  {id: '3', firstName: 'Bart', lastName: 'Simpson', email: 'bart@email.com', password: 'Jhm98*72)'},
  {id: '4', firstName: 'Lisa', lastName: 'Simpson', email: 'lisa@email.com', password: 'gHkl(9$)'},
  {id: '5', firstName: 'Maggie', lastName: 'Simpson', email: 'maggie@email.com', password: 'lma)2s3'},
], user => db.model('users').create(user));

 db.sync({force: true})
  .then(seedUsers)
  .catch(err => console.error(err))
  .finally(() => db.close())
