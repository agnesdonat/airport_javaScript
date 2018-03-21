function Airport() {
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
}

Airport.prototype._isStormy = function() {
  return (Math.random() > 0.8);
}

Airport.prototype.land = function(plane) {
  if (this._isStormy()) { throw Error('Weather is stormy. Plane cannot land.')};
  this._planes.push(plane);
}

Airport.prototype.take_off = function(plane) {
  if (this._isStormy()) { throw Error('Weather is stormy. Plane cannot take off.')};
  var i = this._planes.indexOf(plane);
  this._planes.splice(i,1);
}

Airport.prototype.isPlaneDeparted = function(plane) {
  return !this._planes.includes(plane);
}



function Plane() {

}
