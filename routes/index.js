import React from 'react';
import ReactDom from 'react-dom/server';
import Component from '../app/component';

var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/public', express.static(path.resolve(__dirname, '../public')));

router.get('/', function (req, res) {
  var renderedContent = ReactDom.renderToString(<Component />);
  res.render('react', {app: renderedContent});
});

router.get('/about', function (req, res) {
  res.render('about', {author: 'Taras Bulba'});
});

router.use('/', require('./subscribe'));

/**
 * propertiji in query
 * http://localhost:3000/ali/baba?somekey=foo
 * https://www.npmjs.com/package/qs
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
