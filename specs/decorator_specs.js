const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function(){
  beforeEach(function(){
    decorator = new Decorator();
    paint1 = new Paint(50);
    paint2 = new Paint(40);
    room = new Room(60);
  });
  it('should start with empty stock', function(){
    const actual = decorator.stock.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });
  it('should be able to add paint', function(){
    decorator.addPaint(paint1);
    const actual = decorator.stock.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it('should be able to calculate liters', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.calculateLiters();
    const expected = 90;
    assert.strictEqual(actual, expected);
  });
  it('should be able to calculate enough paint for a room', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.calculatePaint(room);
    const expected = true
    assert.strictEqual(actual, expected);
  });
  it('should paint room', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.paintRoom(room);
    const actual = room.painted;
    const expected = true;
    assert.strictEqual(actual, expected);
  });
  it('some fancy code', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.paintRoom(room);
    const actual = paint2.liters;
    const expected = 30;
    assert.strictEqual(actual, expected);
  })

});
