const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'fundamentals'

router.get('/How-many-times-does-a-character-occur', function(req, res, next) {
  let a = req.query.a;
  let b = req.query.b;

  let count = 0;
  let index=a;
  while(b.indexOf(a, index) !== -1) {
    index = b.indexOf(a, index) + a.length;
    count++;
  }
  
  res.send({count: count});
});
router.get('/Check-if-a-number-is-a-whole-number', function(req, res, next) {
  let a = req.query.a;
  res.send({result: a - Math.floor(a) === 0});
});
router.get('/Multiplication-division-and-comparison-operators', function(req, res, next) {
  let a = req.query.a;
  let b = req.query.b;
  res.send({result: a<b?a/b:a*b});
});

module.exports = router;
