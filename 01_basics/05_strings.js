const name = "Anukalp"
const age = 22

console.log(name + age) // old method
console.log(`my name is ${name} & my age is ${age}`) // new way to write a code


//+++++++ other method to Declare a varible+++++++++

const game = new String('bgmi')

console.log(game)
console.log(game[0])
console.log(game.length)
console.log(game.__proto__)
console.log(game.toUpperCase())
console.log(game.charAt(3))
console.log(game.indexOf('i'))


const newstring = game.substring(0, 2)  // last number nhi print kra ga only 0 and 1 print kra ga

const newstring2 = game.slice(-2, 3)  // slice negative number v accept krta h

console.log(newstring);
console.log(newstring2);

const newstring3 = "   Anukalp     "
console.log(newstring3)
console.log(newstring3.trim());   // trim space ko hata deta hai both side ++++++++ or iska use mainly hmlog user se data lene me use krte h.. password me nhi krte h


const url = "anukalp-raj@google.com"
console.log(url.replace('raj', 'raaj')) //   replace is used for replacing 