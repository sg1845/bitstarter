
var fs = require('fs');
var htmlfile = "index.html";
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSunc(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});

