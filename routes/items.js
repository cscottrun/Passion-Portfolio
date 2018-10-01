const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//marketplace
router.get('/marketplace', (req,res) => {
  knex('sneakers')
  .where('sale_status', 'for sale')
  .then((sneakers) => {
    res.send(sneakers)
  })
})

//item profile
router.get('/items/:id', (req,res) => {
  knex('sneakers')
  .where('id',req.params.id)
  .then((sneakers) => {
    res.send(sneakers)
  })
})

//item edit
router.get('/items/:id/sell', (req,res) => {
  knex('sneakers')
  .where('id', req.params.id)
  .then((sneakers) => {
    res.send(sneakers)
  })
})



module.exports = router;