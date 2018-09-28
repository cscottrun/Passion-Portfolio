const express = require ('express');
const router = express.Router();
const knex = require ('../knex')
const path = require ('path')

router.get('/', (req,res) => {
  res.render('./index')
})




module.exports = router;