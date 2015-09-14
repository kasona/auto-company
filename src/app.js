import Vehicle from './Vehicle';
import FullSize from './FullSize';
import Truck from './Truck';
import SUV from './SUV';
import Sports from './Sports';
import Luxury from './Luxury';

// match input ('string') to key
// function userSearch () {
//   vehicle = {
//   'Full Specs' : FullSpec,
//   'Trucks' : Trucks,
//   'SUV' : SUV,
//   'Sports' : Sports,
//   'Luxury' : Luxury
// };
var userInput = prompt('Please enter type of car to search'); // ask user for input
// create function to compare userInput to userSearch, then print out info below (their options)
switch (userInput) {
  case 'Full Size':

    console.log('\n\n~~~Full Size Features~~~');
    var fullSpecs = new FullSize('Toyota', 'Blue, White, Red', true, 'Automatic', 4, true);
    console.log('Full Size name: ', fullSpecs.name);
    console.log('Full Size color(s): ', fullSpecs.color);
    console.log('Full Size engine(Y/N): ', fullSpecs.engine);
    console.log('Full Size transmission: ', fullSpecs.transmission);
    console.log('Full Size spare tires(Y/N): ', fullSpecs.tires);
    console.log('Full Size towing(Y/N): ', fullSpecs.towing);
  break;

  case 'Trucks' :

    console.log('\n \n ~~~Full Size Features~~~ \n       Trucks');
    var truckSpecs = new Truck('Tacoma', 'Blue, White, Red', true, 'Automatic', 4, true, 'yes');
    console.log('Truck name: ', truckSpecs.name);
    console.log('Truck color(s): ', truckSpecs.color);
    console.log('Truck engine(Y/N): ', truckSpecs.engine);
    console.log('Truck transmission: ', truckSpecs.transmission);
    console.log('Truck spare tires(Y/N): ', truckSpecs.tires);
    console.log('Truck towing(Y/N): ', truckSpecs.towing);
    console.log('Truck cargo bed: ', truckSpecs.cargoBed);
  break;

  case 'SUV' :

    console.log('\n \n ~~~Full Size Features~~~ \n       SUV');
    var suvSpecs = new SUV('Rav4', 'Blue, White, Red', true, 'Automatic', 4, true, 'yes');
    console.log('SUV name: ', suvSpecs.name);
    console.log('SUV color(s): ', suvSpecs.color);
    console.log('SUV engine(Y/N): ', suvSpecs.engine);
    console.log('SUV transmission: ', suvSpecs.transmission);
    console.log('SUV spare tires(Y/N): ', suvSpecs.tires);
    console.log('SUV towing(Y/N): ', suvSpecs.towing);
    console.log('SUV cargo bed: ', suvSpecs.rearDoor);
    console.log('\n \n ~~~Sports Car Features~~~ \n ');
  break;

  case 'Sports' :
    var sportsSpecs = new Sports('Ferrari', 'Black, White', true, 'Manual', 4, 'yes');
    console.log('Sports name: ', sportsSpecs.name);
    console.log('Sports color(s): ', sportsSpecs.color);
    console.log('Sports engine(Y/N): ', sportsSpecs.engine);
    console.log('Sports transmission: ', sportsSpecs.transmission);
    console.log('Sports spare tires(Y/N): ', sportsSpecs.tires);
    console.log('Sports spoilerY/N): ', sportsSpecs.spoiler);
  break;

  case 'Luxury' :
    console.log('\n \n ~~~Luxury Car Features~~~ \n ');
    var luxSpecs = new Luxury('Porsche', 'White', true, 'Automatic', 4, 'yes');
    console.log('Luxury name: ', luxSpecs.name);
    console.log('Luxury color(s): ', luxSpecs.color);
    console.log('Luxury engine(Y/N): ', luxSpecs.engine);
    console.log('Luxury transmission: ', luxSpecs.transmission);
    console.log('Luxury spare tires(Y/N): ', luxSpecs.tires);
    console.log('Luxury leatherY/N): ', luxSpecs.leather);
  break;
}

// console.log('myAuto.size', myAuto.size.key);

// var myPart = Vehicle.createPart();

// console.log(myPart instanceof Vehicle);

// console.log('Vehicle.manufacturer', Vehicle.manufacturer);

