describe('Airport', function() {
  it('can land a plane when the weather is clear', function() {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.79);
    airport.land(plane)
    expect(airport.planes()).toContain(plane);
  });
  it('cannot land a plane when the weather is stormy', function() {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.81);
    expect(function() { airport.land(plane) }).toThrowError('Weather is stormy. Plane cannot land.');
  });
  it('can make a plane take off when the weather is clear', function () {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.79);
    airport.land(plane);
    airport.take_off(plane);
    expect(airport.isPlaneDeparted(plane)).toEqual(true);
  });
  it('cannot make a plane take off when the weather is stormy', function () {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.81);
    expect(function() {airport.take_off(plane)}).toThrowError('Weather is stormy. Plane cannot take off.');
  });
  it('cannot land a plane when airport is full, with default capacity', function() {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.79);
    for (var i = 0; i < 3; i++) {
      airport.land(plane);
    }
    expect(function() { airport.land(plane) }).toThrowError('Airport is full.');
  });
  it('can have its capacity overidden', function() {
    var airport = new Airport();
    var plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.79);
    airport.changeCapacity(5)
    for (var i = 0; i < 3; i++) {
      airport.land(plane);
    }
    expect(function() { airport.land(plane) }).not.toThrowError('Airport is full.');
  });


});
