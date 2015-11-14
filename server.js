var express = require('express');

var app = express();
var port = process.argv[2] || process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, function () {
  console.log('listening at ', port);
});

// node server.js
// http://localhost:3000
// za vsako spremembo je potrebno ponovno zagnat strežnik
