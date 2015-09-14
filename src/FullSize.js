import Vehicle from './Vehicle';

export default class FullSize extends Vehicle{
  constructor(name, color, engine, transmission, tires, towing) {
    super(name, true, color, engine, transmission, tires);
    this._towing = towing;
  }
  get towing() {
    return this._towing;
  }
  set towing(towing) {
    this.towing = towing;
  }
}
