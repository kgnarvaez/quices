var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var user = mongoose.model('User');

var question = new Schema({
  id:  Number,
  type: Number,
  description: String,
  answer: [String],
  user: {type: Schema.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Question', question);