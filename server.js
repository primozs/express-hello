var express = require('express');
var path = require('path');

var app = express();
var port = process.argv[2] || process.env.PORT || 3000;

app.use('/', express.static(path.resolve(__dirname, './public')));

app.listen(port, function () {
  console.log('listening at ', port);
});

// node server.js
// http://localhost:3000
// za vsako spremembo je potrebno ponovno zagnat strežnik
