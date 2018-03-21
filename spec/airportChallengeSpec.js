describe('Airport', function() {
  it('can land a plane', function() {
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });
});
