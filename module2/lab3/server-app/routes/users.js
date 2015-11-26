var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estes es un mensaje escrito por Oscar');
});

module.exports = router;
