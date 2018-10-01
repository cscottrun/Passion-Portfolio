const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../knex');

router.get('/register', (req,res) => {
  res.render('register.ejs')
})

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
        .insert({
          username: req.body.username,
          email: req.body.email,
          hashed_password: hashed_password,
          avatar: req.body.avatar
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      res.send('new user: ' + users[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users', (req,res,next)  => {
  knex.select('username', 'id')
  .from('users')
  .then((users) => {
    res.send(users)
  })
})

router.get('/login', (req,res,next) => {
  res.render('login')
})






module.exports = router;