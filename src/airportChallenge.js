function Airport() {
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
}

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
}

Airport.prototype.take_off = function(plane) {
  var i = this._planes.indexOf(plane);
  this._planes.splice(i,1);
}

Airport.prototype.isPlaneDeparted = function(plane) {
  return !this._planes.includes(plane);
}

function Plane() {

}
