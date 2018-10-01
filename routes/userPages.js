const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

router.get('/users/:id/new', (req,res) => {
  let id = req.params.id;
  knex.select('id')
  .from('users')
  .where('id',id)
  .then((user) => {
    res.render('newSneakers', {user:user})
  })
})

router.get('/users/:id', (req,res) => {
  let id = req.params.id;
  knex.select('username','id')
  .from ('users')
  .where('id', id)
  .then((user) => {
    res.send(user[0])
  })
})

router.get('/users/:id/items', (req, res) => {
  knex('sneakers')
  .where('user_id', req.params.id)
  .then((items) => {
    res.send(items)
  })
})

router.post('/users/:id/new/submit', (req,res) => {
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
.then ( () => {
res.redirect('???')
})

})



module.exports = router;