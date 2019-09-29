
var express = require('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var router = require('./routers/router'); 


var app = express();  

  app.use(bodyParser.json());
  app.use('/', router);

  
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