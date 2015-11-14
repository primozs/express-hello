var express = require('express');
var path = require('path');
var gaikan = require('gaikan');

var app = express();
var port = process.argv[2] || process.env.PORT || 3000;

gaikan.options.layout = 'layout';
app.set('view engine', 'html');
app.engine('html', gaikan);

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/about', function (req, res) {
  res.render('about', {author: 'Taras Bulba'});
});

app.listen(port, function () {
  console.log('listening at ', port);
});

// node server.js
// http://localhost:3000
// za vsako spremembo je potrebno ponovno zagnat strežnik
