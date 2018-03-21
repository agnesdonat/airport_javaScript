describe('Airport', function() {
  it('can land a plane', function() {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });
  it('can make a plane take off', function () {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    airport.take_off(plane);
    expect(airport.isPlaneDeparted(plane)).toEqual(true);
  });
});
