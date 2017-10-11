'use strict';

const db = require('./_db');
const users = require('./models/user.js');

const seedUsers = () => db.Promise.map([
  {id: '1', firstName: 'Homer', lasName: 'Simpson', email: 'homer@email.com'},
  {id: '2', firstName: 'Marge', lasName: 'Simpson', email: 'marge@email.com'},
  {id: '3', firstName: 'Bart', lasName: 'Simpson', email: 'bart@email.com'},
  {id: '4', firstName: 'Lisa', lasName: 'Simpson', email: 'lisa@email.com'},
  {id: '5', firstName: 'Maggie', lasName: 'Simpson', email: 'maggie@email.com'},
], user => db.model('users').create(user));

 db.sync({force: true})
  .then(seedUsers)
  .catch(err => console.error(err))
  .finally(() => db.close())
