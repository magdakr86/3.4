//Zadanie pierwsze
const hello = 'Hello';
const word = 'Word!';
const welcome = `${hello} ${word}`;
console.log(welcome);


//Zadanie drugie
const multiply = (x, y = 1) => x * y;

console.log(multiply(2, 5));
console.log(multiply(5));

//Zadanie trzecie
const average = (...args) => args.reduce((a, b) => a + b)/args.length;

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4


//Zadanie czwarte
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));


//Zadanie piąte
const collection = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = collection;

console.log(firstname);
console.log(lastname);