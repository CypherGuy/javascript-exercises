const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
}

const sum = function() {
  let result = 0;
  for (let i = 0; i <= num.length - 1; i++) {
      result += num[i];
  }
  return result
  
};

const multiply = function(...args) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
      result *= numbers[i];
  }
  return result
};

const power = function(num, raisedTo) {
	return Math.pow(num, raisedTo);
};

const factorial = function(num) {
  let fac = num
  for(let i = num - 1; i >= 1; i--){
    fac = fac * i
  }
  return fac
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
