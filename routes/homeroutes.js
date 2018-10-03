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
  knex('sneakers')
  .where('sale_status', 'for sale')
  .then((sneakers) => {
    //res.send(sneakers)
    res.render('marketplace', {sneakers:sneakers})
  })
})

//testing form submission
router.post('/test', (req,res) => {
  res.send(req.body)
})


module.exports = router;