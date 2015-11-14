var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/about', function (req, res) {
  res.render('about', {author: 'Taras Bulba'});
});


router.use('/', require('./subscribe'));

/**
 * propertiji in query
 * http://localhost:3000/ali/baba?somekey=foo
 *
 * https://www.npmjs.com/package/qs
 * https://www.npmjs.com/package/query-string
 */
router.get('/:arg1/:arg2', function (req, res) {

  var ret = {
    arg1: req.params.arg1,
    arg2: req.params.arg2,
    query: req.query,
    somekey: req.query.somekey
  };

  res.json(ret);
});

module.exports = router;
