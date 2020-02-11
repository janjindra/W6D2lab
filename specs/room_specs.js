const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  beforeEach(function(){
    room = new Room(20);
  });

  it('should start not painted', function() {
    const actual = room.painted;
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('should be able to be painted', function(){
    room.paint();
    const actual = room.painted;
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  


});
