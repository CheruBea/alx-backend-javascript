// 100-evcar.js
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    return new Car();
  }

  // Set Symbol.species to return Car
  static get [Symbol.species]() {
    return Car;
  }
}
