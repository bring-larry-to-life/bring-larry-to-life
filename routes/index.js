var express = require('express');
var router = express.Router();
var graph = require('../lib/graph')

/* GET home page. */
router.get('/', function(req, res, next) {
  graph.postStatus('First post in a long time!\nLove Larry :^)');

  res.render('index', { title: 'Express' });
});

module.exports = router;
