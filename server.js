const path = require ('path');
const express = require('express');
const knex = require ('./knex');
const PORT = process.env.PORT || 8000;
const app = express ();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.use(express.static('public'));

app.set ('view engine', 'ejs');

let homeroutes = require ('./routes/homeroutes');
app.use(homeroutes)

let users = require ('./routes/users');
app.use(users);

let userPages = require ('./routes/userPages');
app.use(userPages);


app.listen(PORT, () => {
  console.log('Welcome to the port of passions')
})

