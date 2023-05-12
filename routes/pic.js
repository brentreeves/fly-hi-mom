var express = require('express');
var router = express.Router();

/* smile. */
router.get('/pic', function(req, res, next) {
  res.render('pic', { title: 'Hi, Mom!' });
});

module.exports = router;
