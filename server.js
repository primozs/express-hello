var express = require('express');
var gaikan = require('gaikan');
var bodyParser = require('body-parser');

var app = express();
var port = process.argv[2] || process.env.PORT || 3000;

gaikan.options.layout = 'layout';
app.set('view engine', 'html');
app.engine('html', gaikan);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routes'));

app.listen(port, function () {
  console.log('listening at ', port);
});

// babel-node server.js
// http://localhost:3000
// za vsako spremembo je potrebno ponovno zagnat strežnik
