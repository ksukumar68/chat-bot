var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
	var msg= req.body.content;
    var message = new Message({
    	content: msg
    });
    message.save(function(err, result){
    	if(err){
    		return res.status(500).json({
    			title: 'An error has occurred',
    			error: err
    		});
    	}
    	res.status(201).json({
    		title: 'Message saved',
    		obj: result
    	});
    });
});

module.exports = router;