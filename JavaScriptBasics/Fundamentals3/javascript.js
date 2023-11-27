// Exercise 1
let add7 = (num) => num + 7;

// Exercise 2
let multiply = (a, b) => {
	return a * b;
}

// Exercise 3
let capitalize = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Exercise 4
let lastLetter = (word) => {
	return word.charAt(word.length - 1);
}

// OR
let lastLetter = (word) => {
	return word.slice(-1);
}