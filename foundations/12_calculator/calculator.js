const add = function(x,y) {
	return x + y;
};

console.log(add(4,5));

const subtract = function(a,b) {
	return a - b;
};

console.log(subtract(5,2));

const sum = function(array) {
	let total = 0;
  for (let i=0; i < array.length; i++){
    total += array[i];
  }

  return total;
};

console.log(sum([1,2,3]));

const multiply = function(array) {
  let total = 1;
  for(let i=0; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

console.log(multiply([2,4,6,8]));

const power = function(a,b) {
  return a ** b;
};

console.log(power(5,3));

const factorial = function(number) {
  let total = 1;
  for (let i=number; i>0; i-- ){
    total *= i;
  }
  return total;
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
