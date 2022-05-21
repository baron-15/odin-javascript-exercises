const add = function(a, b) {
  return a+b;
	
};

const subtract = function(c, d) {
	return c-d;
};

const sum = function(sumVal) {
  let sumOutput = 0;
  for (let i=0; i<sumVal.length; i++) {
    
    sumOutput += sumVal[i];
  }
  return sumOutput;
	
};

const multiply = function(multiplyVal) {
  let multiplyOutput = 1;
  for (let i=0; i<multiplyVal.length; i++) {
    
    multiplyOutput *= multiplyVal[i];
  }
  return multiplyOutput;
};

const power = function(baseVal, powerVal) {
	let powerOutput = 1;
  powerOutput = baseVal ** powerVal;
  return powerOutput;
};

const factorial = function(factVal) {
  factOutput = 1;
  if (factVal == 0) {return factOutput;}
  for (let i=1; i<=factVal; i++)
  {
    factOutput *= i;
  }
  return factOutput;
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
