var express = require('express');
var osc = require('node-osc');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LIGHT' });
  
});

router.post('/instruction', function(req, res, next) {
	console.log("received post");
	console.log(req.body);
	var client = new osc.Client('127.0.0.1', 8000); 
  	client.send('/led', req.body.redval, req.body.greenval, req.body.blueval, function () { client.kill(); });
	res.send(200);
});

module.exports = router;
