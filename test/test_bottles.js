var assert = require('chai').assert;

var invest = require('../lib/bottles.js')

// console.log(invest)
describe("investBottles()", function(){
  it("it should return number of bottles from a given amount", function(){
    var amount = 20
    var result = invest(amount);
    console.log(result)
    assert.isTrue(result == amount / 2)
  })
});


// From the rightmost digit, which is the check digit, and moving left, double the value of every second digit.
//If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
// Take the sum of all the digits.
// If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.