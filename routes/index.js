var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/user', function(req, res, next) {
  console.log(req.body);
  res.status(200).end();
});

module.exports = router;
