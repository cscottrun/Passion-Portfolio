const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//user profile
router.get('/users/:id', (req,res) => {
  let id = req.params.id;
  knex.select('username','id','avatar')
  .from ('users')
  .where('id', id)
  .then((user) => {
    //res.send(user)
    res.render('userProfile')
  })
})

//user- edit user profile
router.get('/users/edit/:id', (req,res) => { 
  knex('users')
  .where('id',req.params.id)
  .then((user) => {
    res.send(user)
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
knex('sneakers')
.insert({
  user_id:req.body.user_id,
  brand: req.body.brand,
  title:req.body.title,
  year:req.body.year,
  condition:req.body.condition,
  size:req.body.size,
  color:req.body.color,
  public:req.body.public,
  cost:req.body.cost,
  image: req.body.image,
  description:req.body.description
}, '*')
.then ( (item) => {
res.send(item)
})

})



module.exports = router;