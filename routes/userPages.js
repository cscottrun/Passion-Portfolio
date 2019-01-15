const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//user profile
  router.get('/users/:id', (req,res) => {
  let user_id = req.params.id;
  knex.select('*')
  .from ('sneakers')
  .leftJoin('users','user_id','users.id')
  .where('user_id', user_id)
  .then((userSneakers) => {
    //res.send(userSneakers)
    res.render('userProfile', {userSneakers:userSneakers})
 })
})

// //edit profile post/patch
// router.post('/users/:id', (req,res) => {
//   console.log(res.body)
//   knex('users')
//   .where('id', req.body.id)
//   .update({
//     email: req.body.email,
//     username: req.body.username,
//     avatar: req.body.avatar
//   },'*')
//   .then(() => {
//     //res.send(user)
//     res.redirect('/users/2')
//   })  
  
// })

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
})

//this needs to become a redirect route for the post of a new item
router.post('/users/new/submit', (req,res) => {
res.send(req.body.color)

})



module.exports = router;