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
  res.send({
    variableData: variableData,
    result: Multiplication_division_and_comparison_operators(a,b)
  });
});
function Multiplication_division_and_comparison_operators(a,b){
  return a<b?a/b:a*b;
}
router.get('/Round-a-number-to-2-decimal-places', function(req, res, next) {
  let a = req.query.a;
  res.send({
    variableData: variableData,
    result: Round_a_number_to_2_decimal_places(a)
  });
});
function Round_a_number_to_2_decimal_places(a){
  return Math.round(a*100)/100;
}
router.get('/Split_a_number_into_its_digits', function(req, res, next) {
  let a = req.query.a;
  res.send({
    variableData: variableData,
    result: Split_a_number_into_its_digits(a)
  });
});
function Split_a_number_into_its_digits(a){
  return (""+a).split('').map(e=>parseInt(e));
}

module.exports = router;
