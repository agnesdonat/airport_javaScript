describe('Airport', function() {
  it('can land a plane', function() {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });
  it('can make a plane take off when the weather is clear', function () {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    spyOn(Math, 'random').and.returnValue(0.79);
    airport.take_off(plane);
    expect(airport.isPlaneDeparted(plane)).toEqual(true);
  });
  it('cannot make a plane take off when the weather is stormy', function () {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    spyOn(Math, 'random').and.returnValue(0.81);
    expect(function() {airport.take_off(plane)}).toThrowError('Weather is stormy. Plane cannot take off.');
  });

});
