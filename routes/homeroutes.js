const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

//homepage
router.get('/', (req,res) => {
  res.render('./index')
})

//marketplace
router.get('/marketplace', (req,res) => {
  knex.select().from('sneakers')
  .then((sneakers) => {
    res.render('marketplace', {sneakers:sneakers})
  })
})


module.exports = router;