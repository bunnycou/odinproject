function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (x) {
	var a = 0;
	x.forEach(summ);
	function summ(x) {
		a += x;
	}
	return a;
}

function multiply (x) {
	var a = 1;
	x.forEach(multi);
	function multi(x) {
		a *= x;
	}
	return a;
}

function power(x, y) {
	return Math.pow(x, y);
}

function factorial(x) {
	var a = x;
	if (a == 0) {
		a = 1;
	}
	for (var i = x-1; i > 1; i--) {
		a *= i;
	}
	
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}