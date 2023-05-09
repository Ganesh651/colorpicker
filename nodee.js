// default export example
let sum = (a, b) => {
  return a + b;
};
module.exports = sum;

let sum = require("./calculator");
console.log(sum(6, 3));
// default export example
                                //  Common js modules
// named export example
let sum1 = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
exports.sum = sum;
exports.sub = sub;

let { sum1, sub } = require("./calculator");
console.log(sum(6, 3));
console.log(sub(6, 3));
// named export example
  