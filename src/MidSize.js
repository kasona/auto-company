import Vehicle from '/Vehicle';

export default class Performance extends Vehicle{
  constructor(name, color, engine, transmission, tires, trunk) {
    super(name, true, color, engine, transmission, tires);
    this._trunk = trunk;
  }
  get trunk() {
    return this._trunk;
  }
  set trunk(trunk) {
    this._trunk = trunk;
  }
}
