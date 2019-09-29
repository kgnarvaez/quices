var mongoose = require ('mongoose');
var question = require ('..//models/userModel.js');

var userController = {};


userController.create = function (req, res){
    var user1 = new question(req.body);
    user1.save(function(err) {
        if (err){
            console.log(err);
            res.status(500).jsonp({ err: 'Error' });
        }
        else{
            console.log('Question a été créée');
            res.status(200).jsonp(user1); 
        }   
    });
}
userController.show = function (req, res){
    user.findOne({id: req.params.id}).exec(function (err, user) {
        if (err) {
            console.log(err);
                res.status(500).jsonp({ err: 'Error' });
            }
        else {
                res.status(200).jsonp(user); 
            }
    });

}


userController.list = function(req, res) {
    user.find({}).exec(function (err, users) {
      if (err) {
        console.log(err);
        res.status(500).jsonp({ err: 'Error' });
      }
      else {
        res.status(200).jsonp(users);
      }
    });
  };
  
module.exports = userController;