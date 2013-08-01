
var fs = require('fs');

fs.readFile('/home/sg1845/bitstarter/index.html','utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }
     console.log(data);
});

var contents = fs.readFileSync('index.html').toString(); 
console.log(contents);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
  response.send(contents);
});
var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
