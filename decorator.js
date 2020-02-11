const Decorator = function(){
  this.stock = [];

};


Decorator.prototype.addPaint = function(paint){
  this.stock.push(paint);
};

Decorator.prototype.calculateLiters = function(){
  let total = 0;
  for (paint of this.stock) {
    total += paint.liters;
  };
  return total;
};

Decorator.prototype.calculatePaint = function(room){
  if (room.area < this.calculateLiters()) {
    return true;
  } else {
    return false;
  };
};

Decorator.prototype.paintRoom = function(room){
  if (this.calculatePaint(room) === true){
    room.paint();
  };
};




Decorator.prototype.paintRoom = function(room) {
  if (this.calculatePaint(room) === true) {
    room.paint();
    for (paint of this.stock) {
      if (room.area > 0) {
        if (paint.liters < room.area) {
          room.area -= paint.liters;
          paint.empty(paint.liters);
        } else {
          paint.empty(room.area);
          room.area = 0;
        };
      };
    };
  };
};


module.exports = Decorator;
