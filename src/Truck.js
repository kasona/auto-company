import FullSize from '/FullSize';

export default class Truck extends FullSize{
  constructor(name, color, engine, transmission, tires, towing, cargoBed) {
    super(name, true, color, engine, transmission, tires, towing);
    this._cargoBed = cargoBed;
  }
  get cargoBed() {
    return this._cargoBed;
  }
  set cargoBed(cargoBed) {
    this._cargoBed = cargoBed;
  }
}
