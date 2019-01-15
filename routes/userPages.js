const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//user profile
  router.get('/users/:id', (req,res) => {
  let user_id = req.params.id;
  knex.select('*')
  .from ('users')
  .rightJoin('sneakers','users.id','sneakers.user_id')
  .where('user_id', user_id)
  .then((userSneakers) => {
    res.render('userProfile', {userSneakers:userSneakers})
 })
})

//user- edit user profile
router.get('/users/edit/:id', (req,res) => { 
  knex('users')
  .where('id',req.params.id)
  .then((user) => {
    res.render('userEdit', {user:user})
  })
})

//user - see all items (may be included on user homepage)
router.get('/users/items/:id', (req, res) => {
  knex('sneakers')
  .where('user_id', req.params.id)
  .then((items) => {
    res.send(items)
  })
})

//user- add a new item
router.get('/users/new/:id', (req,res) => {
  let id = req.params.id;
  knex.select('id')
  .from('users')
  .where('id',id)
  .then((user) => {
    res.render('newSneakers', {user:user})
  })
});


module.exports = router;