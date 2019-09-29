var mongoose = require ('Mongoose');
var Schema = mongoose.Schema;

var quiz = new Schema({
    idQuiz:  Number,  
    questions: [{type: Schema.ObjectId, ref:"Question"}],
    authorQuiz: {type: Schema.ObjectId, ref:"User"}
  });
  
  module.exports = mongoose.model('Quiz', quiz);