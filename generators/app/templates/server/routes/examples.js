const express = require('express');
const router = express.Router();

const User = require('../../db/models/user');

router.get('/all', function(req, res, next) {
  User.findAll()
  .then(all => {
    console.log(all)
    res.send(all);
  })
});

module.exports = router;
