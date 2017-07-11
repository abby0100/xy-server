
//express_demo.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	   res.send('Hello World');
	})

var server = app.listen(8081, "127.0.0.1", function () {

	  var host = server.address().address
	  var port = server.address().port

	  console.log("Start server at http://%s:%s", host, port)

	});
