function Airport() {
  this._planes = [];
}

Airport.prototype.planes = function() {
  return this._planes;
}

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
}

function Plane() {

}
