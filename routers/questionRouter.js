var express = require('express');
var router = express.Router();
var question = require("../controllers/questionController.js");


router.post('/create', function(req, res) {
    question.create(req, res);
});

router.get('/show/:id', function(req, res) {
    question.show(req, res);
});

router.get('/show', function(req, res) {
    question.list(req, res);
});

router.put('/update/:id', function(req, res){
    question.update(req, res)
});


module.exports = router;