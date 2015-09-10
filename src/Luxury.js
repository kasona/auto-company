import Vehicle from '/Vehicle';

export default class Luxury extends Vehicle{
  constructor(name, color, engine, transmission, tires, leather) {
    super(name, true, color, engine, transmission, tires);
    this._leather = leather;
  }
  get leather() {
    return this._leather;
  }
  set leather(leather) {
    this._leather = leather;
  }
}
