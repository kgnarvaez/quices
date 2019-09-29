var mongoose = require ('mongoose');
var quiz = require ('..//models/quizModel.js');

var quizController = {};

//post
quizController.create = function (req, res){
    var quiz1 = new question(req.body);
    quiz1.save(function(err) {
        if (err){
            console.log(err);
            res.status(500).jsonp({ err: 'Error' });
        }
        else{
            console.log('Quiz created');
            res.status(200).jsonp(quiz1); 
        }   
    });
}
//get one
quizController.show = function (req, res){
    quiz.findOne({id: req.params.id}).exec(function (err, quiz) {
        if (err) {
            console.log(err);
                res.status(500).jsonp({ err: 'Error' });
            }
        else {
                res.status(200).jsonp(quiz); 
            }
    });

}

//get list
quizController.list = function(req, res) {
    quiz.find({}).exec(function (err, quices) {
      if (err) {
        console.log(err);
        res.status(500).jsonp({ err: 'Error' });
      }
      else {
        res.status(200).jsonp(quices);
      }
    });
  };
  
  quizController.update = function(req, res) {
    quiz.findOneAndUpdate({id:req.body.idQuiz}, { $set: {questions: req.body.questions}}, { new: true }, function (err, quiz) {
      if (err) {
        console.log(err);
        res.status(500).jsonp({ err: 'Error' });
      }else{
         console.log('Quiz updated');
         res.status(200).jsonp(quiz);
        }   
    });
};

module.exports = questionController;