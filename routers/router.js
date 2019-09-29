var express = require ('express');
var router = express.Router();
var question = require('./questionRouter'); 
var user = require('./userRouter'); 

var route = express(); 
route.use('/question', question);
route.use('/user', user);
  
module.exports = route;