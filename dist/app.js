'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Vehicle = require('./Vehicle');

var _Vehicle2 = _interopRequireDefault(_Vehicle);

var _FullSize = require('./FullSize');

var _FullSize2 = _interopRequireDefault(_FullSize);

var _Truck = require('./Truck');

var _Truck2 = _interopRequireDefault(_Truck);

var _SUV = require('./SUV');

var _SUV2 = _interopRequireDefault(_SUV);

var _Sports = require('./Sports');

var _Sports2 = _interopRequireDefault(_Sports);

var _Luxury = require('./Luxury');

var _Luxury2 = _interopRequireDefault(_Luxury);

// import {Size} from './Size';

// const manufacturer = "Acme INC";

console.log('\n\n~~~Full Size Features~~~');

var fullSpecs = new _FullSize2['default']('Toyota', 'Blue, White, Red', true, 'Automatic', 4, true);

console.log('Full Size name: ', fullSpecs.name);
console.log('Full Size color(s): ', fullSpecs.color);
console.log('Full Size engine(Y/N): ', fullSpecs.engine);
console.log('Full Size transmission: ', fullSpecs.transmission);
console.log('Full Size spare tires(Y/N): ', fullSpecs.tires);
console.log('Full Size towing(Y/N): ', fullSpecs.towing);

console.log('\n \n ~~~Full Size Features~~~ \n       Trucks');

// use truck constructors
var truckSpecs = new _Truck2['default']('Tacoma', 'Blue, White, Red', true, 'Automatic', 4, true, 'yes');
console.log('Truck name: ', truckSpecs.name);
console.log('Truck color(s): ', truckSpecs.color);
console.log('Truck engine(Y/N): ', truckSpecs.engine);
console.log('Truck transmission: ', truckSpecs.transmission);
console.log('Truck spare tires(Y/N): ', truckSpecs.tires);
console.log('Truck towing(Y/N): ', truckSpecs.towing);
console.log('Truck cargo bed: ', truckSpecs.cargoBed);

console.log('\n \n ~~~Full Size Features~~~ \n       SUV');

//use SUV constructors
var suvSpecs = new _SUV2['default']('Rav4', 'Blue, White, Red', true, 'Automatic', 4, true, 'yes');
console.log('SUV name: ', suvSpecs.name);
console.log('SUV color(s): ', suvSpecs.color);
console.log('SUV engine(Y/N): ', suvSpecs.engine);
console.log('SUV transmission: ', suvSpecs.transmission);
console.log('SUV spare tires(Y/N): ', suvSpecs.tires);
console.log('SUV towing(Y/N): ', suvSpecs.towing);
console.log('SUV cargo bed: ', suvSpecs.rearDoor);

console.log('\n \n ~~~Sports Car Features~~~ \n ');

//use SUV constructors
var sportsSpecs = new _Sports2['default']('Ferrari', 'Black, White', true, 'Manual', 4, 'yes');
console.log('Sports name: ', sportsSpecs.name);
console.log('Sports color(s): ', sportsSpecs.color);
console.log('Sports engine(Y/N): ', sportsSpecs.engine);
console.log('Sports transmission: ', sportsSpecs.transmission);
console.log('Sports spare tires(Y/N): ', sportsSpecs.tires);
console.log('Sports spoilerY/N): ', sportsSpecs.spoiler);

console.log('\n \n ~~~Luxury Car Features~~~ \n ');

//use SUV constructors
var luxSpecs = new _Luxury2['default']('Porsche', 'White', true, 'Automatic', 4, 'yes');
console.log('Luxury name: ', luxSpecs.name);
console.log('Luxury color(s): ', luxSpecs.color);
console.log('Luxury engine(Y/N): ', luxSpecs.engine);
console.log('Luxury transmission: ', luxSpecs.transmission);
console.log('Luxury spare tires(Y/N): ', luxSpecs.tires);
console.log('Luxury leatherY/N): ', luxSpecs.leather);

// console.log('myAuto.size', myAuto.size.key);

// var myPart = Vehicle.createPart();

// console.log(myPart instanceof Vehicle);

// console.log('Vehicle.manufacturer', Vehicle.manufacturer);