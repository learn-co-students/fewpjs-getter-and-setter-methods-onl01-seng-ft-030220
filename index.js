// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  };

  get diameter() {
    return this._diameter = this.radius * 2.0;
  };

  set diameter(newDiameter) {
    this.radius = newDiameter / 2.0;
  };

  get circumference() {
    return this._circumference = this.diameter * Math.PI;
  };

  set circumference(newCircumference) {
    this.diameter = newCircumference / Math.PI;
  };

  get area() {
    return this._area = Math.PI * (this.radius ** 2.0);
  };

};
