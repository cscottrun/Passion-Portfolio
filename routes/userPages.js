const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')


router.get('/users/:id', (req,res) => {
  let id = req.params.id;
  knex.select('username','id')
  .from ('users')
  .where('id', id)
  .then((user) => {
    res.send(user[0])
  })
})

router.get('/user/:id/new', (req,res) => {
  res.render('newProduct')
})


module.exports = router;