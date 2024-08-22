const marvel_heros = ["ironman", "spiderman", "hulk"]

const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros)

const allsuperheros = marvel_heros.concat(dc_heros)

console.log(allsuperheros)

const allheros = [...marvel_heros, ...dc_heros]

console.log(allheros)

const array = [1, 2, 3, [4, 5], 6, 7, [5, 6, [8, 9]]]

const realarray = array.flat(Infinity);
console.log(realarray)

console.log(Array.isArray("Anukalp"));       // asking that is the value is array

console.log(Array.from("Anukalp"));       // directly convert to array

console.log(Array.from({ name: "anukalp"}))     // directly object ko array nhi banta h.. phle batna para ga ki key ka array bane ya value ka..

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


