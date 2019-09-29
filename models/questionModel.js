var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var question = new Schema({
  id:  Number,
  type: Number,
  description: String,
  answer: [String],
  author: {type: Schema.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Question', question);