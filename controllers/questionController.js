var mongoose = require ('mongoose');
var question = require ('..//models/questionModel.js');

var questionController = {};

//post
questionController.create = function (req, res){
    var question1 = new question(req.body);
    question1.save(function(err) {
        if (err){
            console.log(err);
            res.status(500).jsonp({ err: 'Error' });
        }
        else{
            console.log('Question a été créée');
            res.status(200).jsonp(question1); 
        }   
    });
}
//get one
questionController.show = function (req, res){
    question.findOne({id: req.params.id}).exec(function (err, question) {
        if (err) {
            console.log(err);
                res.status(500).jsonp({ err: 'Error' });
            }
        else {
                res.status(200).jsonp(question); 
            }
    });

}

//get list
questionController.list = function(req, res) {
    question.find({}).exec(function (err, questions) {
      if (err) {
        console.log(err);
        res.status(500).jsonp({ err: 'Error' });
      }
      else {
        res.status(200).jsonp(questions);
      }
    });
  };
  
questionController.update = function(req, res) {
    question.findOneAndUpdate({id:req.body.id}, { $set: {type: req.body.type, description: req.body.description, answer: req.body.answer }}, { new: true }, function (err, question) {
      if (err) {
        console.log(err);
        res.status(500).jsonp({ err: 'Error' });
      }
      res.status(200).jsonp(question);
    });
};

module.exports = questionController;