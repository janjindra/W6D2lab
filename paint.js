const Paint = function(liters){
  this.liters = liters;

};

Paint.prototype.checkLiters = function(){
  if (this.liters === 0) {
    return true;
  } else {
    return false;
  };
};

Paint.prototype.empty = function(value){
  this.liters -= value;
};

module.exports = Paint;
