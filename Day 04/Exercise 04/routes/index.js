var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.writeHead(200,{
    'x-head-token': req.token
  });
  res.end("Hi");*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
