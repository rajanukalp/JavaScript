const score = new Number(55)

console.log(score);

const number = 5004.789
console.log(number.toPrecision(5))

console.log(number.toString().length);

console.log(number.toFixed(2));   // mainly use in e commerce web pages for calculation

const anothernumber =1000000
console.log(anothernumber.toLocaleString('en-IN'))

// ++++++++++++++++++ Maths++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-5));    // negative value to positive me kr deta h
console.log(Math.max(3, 5, 7, 5, 2));
console.log(Math.min(3, 5, 7, 5, 2));

console.log(Math.round(6.7));  // number ko roundoff kr deta h

console.log(Math.ceil(4.1));    // roundoff higher value par he kraga

console.log(Math.floor(3.9));    // rounsoff lower value par he kra ga

console.log(Math.random());     // random value dega 0 se 1 ke bich me
console.log((Math.random()*10) +1 );   // 1 se 10 ke bich me koi v random value dega

const min = 10 
const max = 20

console.log((Math.floor(Math.random(max - min)* 10) +10))
