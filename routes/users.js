const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../knex');

//get login page
router.get('/login', (req,res,next) => {
  res.render('login')
})

//get register page
router.get('/register', (req,res) => {
  res.render('register.ejs')
})

//POST - create new user
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
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

//get all users
router.get('/users', (req,res,next)  => {
  knex.select('username', 'id')
  .from('users')
  .then((users) => {
    res.send(users)
  })
})







module.exports = router;