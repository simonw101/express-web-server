var express = require('express');
var app = express();
var portNumber = 3000;
var middleware = require("./middleware.js");

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('about us');
});

app.use(express.static('/Users/simonwilson/Dropbox/node/expressPractise/public'));

app.listen(portNumber, function() {
  console.log("express server started on port " + portNumber);
});
