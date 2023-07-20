var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()

const routerproduits = require('./routes/produits.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://CRUDproducts:test123@crudproducts.nmyds90.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))

app.use('/api', routerproduits)

module.exports = app;
