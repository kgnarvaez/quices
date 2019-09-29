var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    idUser:  Number,  
    nameUser: String,
    lastNameUser: String,
    mailUser: String
  });
  
  module.exports = mongoose.model('User', user);