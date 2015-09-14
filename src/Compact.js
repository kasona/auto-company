import MidSize from './MidSize';

export default class Compact extends MidSize{
  constructor(name, color, engine, transmission, tires) {
    super(name, true, color, engine, transmission, tires, true);
  }
}
