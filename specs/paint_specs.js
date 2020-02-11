const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function (){
beforeEach(function(){

paint = new Paint(50);
});

it('should have a number of liters', function(){
const actual = paint.liters;
const expected = 50;
assert.strictEqual(actual, expected);

});
it('should check if empty', function(){
  const actual = paint.checkLiters();
  const expected = false;
  assert.strictEqual(actual, expected);
});
it('should be able to empty itself of paint', function(){
  paint.empty(30);
  const actual = paint.liters;
  const expected = 20;
  assert.strictEqual(actual, expected);
});

});
