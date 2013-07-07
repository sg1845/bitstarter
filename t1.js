
var fs = require('fs');

var contents = fs.readFileSync('index.html').toString(); 
console.log(contents);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World!');
  response.send(contents);
});
var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
