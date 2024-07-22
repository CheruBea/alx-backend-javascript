// 3-main.js

import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));      // Should use default values for expansion1989 and expansion2019
console.log(getSumOfHoods(34, 3));   // Should use default value for expansion2019
console.log(getSumOfHoods(34, 3, 4)); // Should use provided values for both expansion1989 and expansion2019

