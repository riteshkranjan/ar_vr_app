var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/test', function(req, res){
  console.log("In method test");
  res.end("hurray!! ar vr service is working")
});

var server = app.listen(8080)
