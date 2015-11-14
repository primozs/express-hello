var express = require('express');
var router = express.Router();

router.get('/subscribe', function (req, res) {
  res.render('subscribe');
});

router.post('/subscribe', function (req, res) {
  var test = req.body.test;
  console.log(test);
  res.send(test);
});

module.exports = router;
