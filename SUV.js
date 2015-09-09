import FullSize from '/FullSize';

export default class SUV extends FullSize{
  constructor(name, color, engine, transmission, tires, towing, rearDoor) {
    super(name, true, color, engine, transmission, tires, towing);
    this._rearDoor = rearDoor;
  }
  get rearDoor() {
    return this._rearDoor;
  }
  set rearDoor(rearDoor) {
    this._rearDoor = rearDoor;
  }
}
