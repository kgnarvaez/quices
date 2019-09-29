
var express = require('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var question = require('./routers/questionRouter'); 
var user = require('./routers/userRouter'); 

var app = express();  
  app.use(bodyParser.json());
  app.use('/question', question);
  app.use('/user', user);
  
  
//database conection
const config =
{
  autoIndex: false,
  useNewUrlParser:true,
  useUnifiedTopology: true,
};
mongoose.connect ('mongodb://localhost/quices',config)
  .then(()=> console.log ('Connexion reussie'))
  .catch((err)=>console.error(err));

//server conection
app.listen(3000, function () {
  console.log('port 3000!');
});


module.exports = app;