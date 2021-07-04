const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//item profile
router.get('/items/:id', (req,res) => {
  knex('sneakers')
  .where('id',req.params.id)
  .then((sneaker) => {
    //res.send(sneaker)
    res.render('itemProfile', {sneaker:sneaker})
  })
})

//put item for sale
router.get('/items/sell/:id', (req,res) => {
  knex('sneakers')
  .where('id', req.params.id)
  .then((sneakers) => {
    res.send(sneakers)
  })
})

//edit item
router.get('/items/edit/:id', (req,res) => {
  knex('sneakers')
  .where('id', req.params.id)
  .then((sneakers) => {
    res.send(sneakers)
  })
})



module.exports = router;