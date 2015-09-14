import Vehicle from './Vehicle';

export default class Sports extends Vehicle{
  constructor(name, color, engine, transmission, tires, spoiler) {
    super(name, true, color, engine, transmission, tires);
    this._spoiler = spoiler;
  }
  get spoiler() {
    return this._spoiler;
  }
  set spoiler(spoiler) {
    this._spoiler = spoiler;
  }
}