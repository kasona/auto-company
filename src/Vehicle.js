export default class Vehicle {

  constructor(name, chassis, color, engine, transmission, tires) {

    this._name = name;
    this._chassis = chassis;
    this._color = color;
    this._engine = engine;
    this._transmission = transmission;
    this._tires = tires;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get chassis() {
    return this._chassis;
  }
  set chassis(chassis) {
    this._chassis = chassis;
  }

  get color () {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  get tires() {
    return this._tires;
  }
  set tires(tires) {
    this._tires = tires;
  }
  get engine() {
    return this._engine;
  }
  set engine(engine) {
    this._engine = engine;
  }
  get transmission () {
    return this._transmission;
  }
  set transmission(transmission) {
    this._transmission = transmission;
  }
}