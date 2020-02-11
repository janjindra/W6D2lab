const Room = function (area) {
this.area = area;
this.painted = false;

};

//prototypes
Room.prototype.paint = function(){
  this.painted = true;
};



module.exports = Room;
